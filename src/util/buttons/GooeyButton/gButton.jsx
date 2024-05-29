import React, { useRef, useEffect } from 'react';
import { Box, Button, Container, keyframes, chakra, Text  } from '@chakra-ui/react';

const GooeyButton = ( { button1Text, button2Text, ...rest } ) => {
  const innerRef = useRef(null);

  const wiggleAnimation = keyframes`
  0% { transform: rotate(0deg); }
  25% { transform: rotate(2deg); }
  50% { transform: rotate(0deg); }
  75% { transform: rotate(-2deg); }
  100% { transform: rotate(0deg); }
`;

  useEffect(() => {
    const handleMouseMove = (e) => {
      const target = e.target.closest('.inner');
      if (target) {
        const rect = target.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        target.style.setProperty('--x', `${x}px`);
        target.style.setProperty('--y', `${y}px`);
        target.style.setProperty('--height', `${rect.height}px`);
        target.style.setProperty('--width', `${rect.width}px`);
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <>
      <Container
        {...rest}
        position="relative"
        width="fit-content"
        overflow="hidden"
        borderRadius={500}
        padding="0"
        justifyContent="flex-end"
        mixBlendMode="darken"
        margin={{ base: "0 0rem 0rem 0", md: "0 -2rem 0rem 0" }}
        _hover={{ zIndex: 2 }}
      >
        <Box
          className="inner"
          display="inline-block"
          position="relative"
          pointerEvents="all"
          zIndex={2}
          cursor="none"
        >
          <Button
            padding="3.5rem 6rem"
            border="none"
            fontSize="auto"
            position="relative"
            background="none"
            zIndex={2}
            cursor="none"
            fontWeight={100}
            letterSpacing="2px"
            textTransform="uppercase"
            fontFamily='"Avant", "Futura", sans-serif'
            textShadow="clamp(-8px, calc((var(--width) / 2 - var(--x)) / 8), 8px) clamp(-8px, calc((var(--height) / 2 - var(--y)) / 8), 8px) 12px rgba(0, 0, 0, 0)"
            transition="text-shadow 500ms var(--elastic)"
            animation={`${wiggleAnimation} 2s ease-in-out infinite`}
            _hover={{
              '--shadow': 'max(calc((var(--width) / 2 - var(--x)) / 8 + ((var(--height) / 2 - var(--y)) / 3)), calc((((var(--width) / 2 - var(--x)) / 8) + ((var(--height) / 2 - var(--y)) / 3)) * -1), 5px)',
              textShadow: 'clamp(-6px, calc((var(--width) / 2 - var(--x)) / 12), 6px) clamp(-4px, calc((var(--height) / 2 - var(--y)) / 16), 4px) var(--shadow) #000',
              '& ~ .blob:before': {
                transition: 'transform 500ms var(--elastic), box-shadow 1000ms var(--elastic)',
                transform: 'translate(clamp(5%, calc(var(--x) - 50%), 550%), clamp(1rem, calc(var(--y) - 50%), 5rem)) scale(1.25)',
                boxShadow: '0 0 0 0.05rem #fff, 0 -6rem 0 1.25rem #fff, 0 6rem 0 1.25rem #fff',
              },
            }}
            _active={{
              cursor: 'grab',
              '&:hover ~ .blob:before': {
                boxShadow: '0 0 0 0rem #fff, 0 -5rem 0 1.75rem #fff, 0 5rem 0 1.75rem #fff',
                transition: 'transform 500ms var(--elastic), box-shadow 500ms var(--elastic)',
                transform: 'translate(clamp(5%, calc(var(--x) - 50%), 550%), clamp(calc(50% + 1rem), calc(var(--y) - 50%), calc(50% + 1.5rem))) scale(1)',
              },
            }}
          >
         <Text
              position="relative"
              zIndex={3}
              color="#fff"
              textShadow="0 0 10px #000, 0 0 20px #000, 0 0 30px #000, 0 0 40px #000"
            >
              {button1Text}
            </Text>
          </Button>
          <Box
            className="blob"
            position="absolute"
            pointerEvents="none"
            width="100%"
            height="100%"
            top={0}
            left={0}
            background="#fff"
            filter="blur(25px) contrast(45)"
            zIndex={1}
            _before={{
              content: '""',
              position: 'absolute',
              background: '#000',
              width: '15%',
              height: 'auto',
              zIndex: 2,
              transition: 'transform 750ms var(--elastic), box-shadow 500ms var(--elastic)',
              aspectRatio: '1/1',
              boxShadow: '0 0 0 0.75rem #fff, 0 -8rem 0 -2rem #fff, 0 8rem 0 -2rem #fff',
              left: 0,
              top: 0,
              borderRadius: '100%',
              transform: 'translate(clamp(10%, calc(var(--x) - 50%), 550%), clamp(1rem, calc(var(--y) - 50%), 5rem)) scale(0)',
            }}
            _after={{
              content: '""',
              position: 'absolute',
              background: '#000',
              width: 'calc(100% - 4rem)',
              height: 'calc(100% - 4rem)',
              top: '2rem',
              left: '2rem',
              borderRadius: '5rem',
              boxShadow: '0 0 0 8rem #fff',
            }}
          />
        </Box>
      </Container>
      <Container
        position="relative"
        width="auto"
        overflow="hidden"
        padding="0.5rem"
        display="flex"
        justifyContent="flex-end"
        mixBlendMode="darken"
        zIndex={1}
        margin="0 -1rem"
        _last={{ justifyContent: 'start' }}
        _hover={{ zIndex: 2 }}
        _nthoftype={2}
        sx={{
          '--lightest': '#ffd986',
          '--light': '#fdbb2d',
          '--dark': '#b21f1f',
          '--darkest': '#1a2a6c',
        }}
      >
        <Box
          ref={innerRef}
          className="inner"
          display="inline-block"
          position="relative"
          pointerEvents="all"
          zIndex={2}
          cursor="none"
          boxShadow="0 0 0 500vmin #e8e6de"
          _before={{
            content: '""',
            position: 'absolute',
            width: '200%',
            height: '200%',
            top: '0rem',
            left: '0rem',
            filter: 'blur(2px) brightness(0)',
            background: `radial-gradient(
              ellipse at center,
              rgba(0, 0, 0, 0.25) 0%,
              var(--t) 20%
            ),
            radial-gradient(
              circle at center,
              var(--lightest),
              var(--light) 5%,
              var(--dark) 30%,
              var(--darkest) 50%
            ),
            var(--darkest)`,
            backgroundSize: '0px 0px, 0px 0px, 100%',
            backgroundPosition: '50% 50%',
            backgroundRepeat: 'no-repeat',
            opacity: 1,
            mixBlendMode: 'lighten',
            zIndex: 2,
            transition: 'transform 0.5s var(--elastic), background-size 0.25s ease-in-out, filter 0.5s ease-in-out',
            transform: 'translate(calc(var(--x) - 50%), calc(var(--y) - 50%))',
            pointerEvents: 'none',
          }}
          _hover={{
            _before: {
              backgroundSize: '35% 60%, 100% 100%, 100%',
              filter: 'blur(2px) brightness(1)',
              backgroundSize: '0px 0px, 100% 100%, 100%',
              transition: 'transform 0.5s var(--elastic), background-size 0.25s ease-in-out',
            },
          }}
        >
            {button2Text && (
            <Button
                padding="3.5rem 6rem"
                border="none"
                fontSize="1.5rem"
                position="relative"
                background="transparent"
                zIndex={2}    
                cursor="none"
                fontWeight={100}
                letterSpacing="2px"
                textTransform="uppercase"
                fontFamily='"Avant", "Futura", sans-serif'
                textShadow="clamp(-8px, calc((var(--width) / 2 - var(--x)) / 8), 8px) clamp(-8px, calc((var(--height) / 2 - var(--y)) / 8), 8px) 12px rgba(0, 0, 0, 0)"
                transition="text-shadow 500ms var(--elastic)"
                animation={`${wiggleAnimation} 2s ease-in-out infinite`}
                _hover={{
                '--shadow': 'max(calc((var(--width) / 2 - var(--x)) / 8 + ((var(--height) / 2 - var(--y)) / 3)), calc((((var(--width) / 2 - var(--x)) / 8) + ((var(--height) / 2 - var(--y)) / 3)) * -1), 5px)',
                textShadow: 'clamp(-6px, calc((var(--width) / 2 - var(--x)) / 12), 6px) clamp(-4px, calc((var(--height) / 2 - var(--y)) / 16), 4px) var(--shadow) #000',
                '& ~ .blob:before': {
                    transition: 'transform 500ms var(--elastic), box-shadow 1000ms var(--elastic)',
                    transform: 'translate(clamp(5%, calc(var(--x) - 50%), 550%), clamp(1rem, calc(var(--y) - 50%), 5rem)) scale(1.25)',
                    boxShadow: '0 0 0 0.05rem #fff, 0 -6rem 0 1.25rem #fff, 0 6rem 0 1.25rem #fff',
                },
                }}
                _active={{
                cursor: 'grab',
                '&:hover ~ .blob:before': {
                    boxShadow: '0 0 0 0rem #fff, 0 -5rem 0 1.75rem #fff, 0 5rem 0 1.75rem #fff',
                    transition: 'transform 500ms var(--elastic), box-shadow 500ms var(--elastic)',
                    transform: 'translate(clamp(5%, calc(var(--x) - 50%), 550%), clamp(calc(50% + 1rem), calc(var(--y) - 50%), calc(50% + 1.5rem))) scale(1)',
                },
                }}
            >
                {button2Text ? button2Text : " "}
            </Button>
            )}
          <Box
            className="blob"
            position="absolute"
            pointerEvents="none"
            width="100%"
            height="100%"
            top={0}
            left={0}
            background="#fff"
            filter="blur(12px) contrast(25)"
            zIndex={1}
            _before={{
              content: '""',
              position: 'absolute',
              background: '#000',
              width: '15%',
              height: 'auto',
              zIndex: 2,
              transition: 'transform 750ms var(--elastic), box-shadow 500ms var(--elastic)',
              aspectRatio: '1/1',
              boxShadow: '0 0 0 0.75rem #fff, 0 -8rem 0 -2rem #fff, 0 8rem 0 -2rem #fff',
              left: 0,
              top: 0,
              borderRadius: '100%',
              transform: 'translate(clamp(10%, calc(var(--x) - 50%), 550%), clamp(1rem, calc(var(--y) - 50%), 5rem)) scale(0)',
            }}
            _after={{
              content: '""',
              position: 'absolute',
              background: '#000',
              width: 'calc(100% - 4rem)',
              height: 'calc(100% - 4rem)',
              top: '2rem',
              left: '2rem',
              borderRadius: '5rem',
              boxShadow: '0 0 0 8rem #fff',
            }}
          />
        </Box>
      </Container>
    </>
  );
};

export const CustomGooeyButton = chakra(GooeyButton)