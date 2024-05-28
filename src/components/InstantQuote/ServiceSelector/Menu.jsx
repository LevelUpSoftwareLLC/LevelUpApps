
import React, { useState, useEffect, useReducer } from "react";
import { Stack, Flex, Grid, Select, HStack, Text, Box, Image, Checkbox } from '@chakra-ui/react' 
import { useRouteContext } from "../../../util/routingContext/routeContext";
import { reducer } from "../../../util/routingContext/reducers";
import {ADD_EXPERIENCE, ADD_MASSAGE_TYPE, ADD_INTENSITY, ADD_LOOKING_FOR, ADD_WHERESYOUR_PAIN} from '../../../util/actions/actions'
import { MenuOutputOptions } from "./MenuGrid";
// import { useLazyQuery } from '@apollo/client';
// import {GET_SERVICES} from '../../utils/queries.jsx'
import { hitTheDB, hitTheDBOneMoreTime, getRecommendations } from "../../../util/MenuControllers";

export const MenuSelector = (({ setTitle }) => {
// const { loading, error, data } = useQuery(GET_SERVICES); // fetches data when component mounts
// const [getServices, { loading, error, data }] = useLazyQuery(GET_SERVICES);
const [allServices, setAllServices] = useState([]); 
const [checkedOption, setCheckedOption] = useState(null);
const [selectedOptions, setSelectedOptions] = useState([]);
// setting up the use reducer hook
const initialState = useRouteContext();
const [state, dispatch] = useReducer(reducer, initialState);

useEffect(() => {
// calls the api
const fetchData = async () => {
    try{
        let d = await hitTheDB()
        let data = await hitTheDBOneMoreTime(d)
        return data
   }catch(err){
        console.error(err)
   }
  };

  async function loadData() {
    try {
        const result = await fetchData(); // Await the fetchData call to resolve the promise
        if (result) {
            setAllServices(result);
        } else {
            console.log("No data received.");
        }
    } catch (error) {
        console.error('Error handling in loadData:', error);
    }
}

loadData();
let options = getRecommendations(state, allServices);
setSelectedOptions(options)
getTitle();
}, [state]);


    // the function call on change of the select box
    const handleChange = (event) => {
        
        if(event.target.name == 'experience'){
            dispatch({ type: ADD_EXPERIENCE, payload: event.target.value})
        }
        if(event.target.name == 'intensity'){
            dispatch({ type: ADD_INTENSITY, payload: event.target.value})
        }
        if(event.target.name == 'lookingFor'){
            dispatch({ type: ADD_LOOKING_FOR, payload: event.target.value})
        }
        if(event.target.name == 'pain'){
            dispatch({ type: ADD_WHERESYOUR_PAIN, payload: event.target.value})
        }
    }

    const handleCheckboxChange = (option) => {
        setCheckedOption(option.title);

        dispatch({ type: ADD_MASSAGE_TYPE, payload: option.name})

    };

    function getTitle() {
      let results;
      const cards = document.getElementsByClassName('card');
      const cardsArr = Array.from(cards);
      cardsArr.forEach((card) => {
        const s = card.querySelectorAll('.check');
        if (s[0].firstChild.checked) {
          const t = card.querySelectorAll('.title');
          results = t[0].innerText;
          setTitle(results);
        }
      })
    }

    return (
        <>
        <HStack spacing={8} display='flex' justify='center' marginTop={{ base: '10', sm: '4', md: '2', lg: '', xl:'' }}>
            <Select name="experience" onChange={handleChange} placeholder="Have you had a massage before?" size="sm" width="28%" height="32px" >
                <option value='No'>No</option>
                <option value='Yes'>Yes</option>
                
            </Select>
            <Select name="intensity" onChange={handleChange} placeholder="Intensity" size="sm" width="12%" height="32px" >
                <option value='Soft'>Soft</option>
                <option value='Medium'>Medium</option>
                <option value='Hard'>Hard</option>
                
            </Select>
            <Select name="lookingFor" onChange={handleChange} placeholder="What are you looking for?" size="sm" width="28%" height="32px" >
                <option value='Alleviate pain'>Alleviate pain</option>
                <option value='Increase energy'>Increase energy</option>
                <option value='Improve mood'>Improve mood</option>
                <option value='Promote relaxation'>Promote relaxation</option>
                <option value='Reduce anxiety'>Reduce anxiety</option>
                <option value='Release tension'>Release tension</option>
                
            </Select>
            <Select name="pain" onChange={handleChange}  placeholder="Where is your pain?" size="sm" width="22%" height="32px">
                <option value='Back'>Back</option>
                <option value='Chest'>Chest</option>
                <option value='Head'>Head</option>
                <option value='Legs'>Legs</option>
                <option value='Neck'>Neck</option>
                <option value='Shoulders'>Shoulders</option>
                
            </Select>
        </HStack>
       
        <Box>
            <MenuOutputOptions selectedOptions={selectedOptions} handleCheckboxChange={handleCheckboxChange} checkedOption={checkedOption}/>
        </Box>
        </>
        
    )
})



