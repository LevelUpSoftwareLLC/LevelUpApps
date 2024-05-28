import { get, set } from 'idb-keyval';
import { transformData } from '../transformData'
import data from '../testData.json'
// import { useLazyQuery } from '@apollo/client';
// import {GET_SERVICES} from '../../utils/queries.jsx'
let transformedData;
let storedServices;
let lastFetchTime;
let currentTime = new Date().getTime();
// const { loading, error, data } = useQuery(GET_SERVICES); // fetches data when component mounts
// const [getServices, { loading, error, data }] = useLazyQuery(GET_SERVICES);
let allServicesArr; 

export const hitTheDB = async () =>{
    // attempt to get from idb
    storedServices = await get('servicesData');
    lastFetchTime = await get('lastFetchTime');
    currentTime = new Date().getTime();
    // if idb, set from idb, else set from graphql dataset
    if (storedServices && lastFetchTime && (currentTime - lastFetchTime <= 10 * 1000)) {
        // Data exists in IndexedDB and is less than an hour old
        allServicesArr = storedServices;
    } else {
        allServicesArr = data;
        // getServices() // the call to GraphQL backend through lazyQuery
    }
    return allServicesArr
}

export const hitTheDBOneMoreTime = async (temporaryToggleForData) => {
    // if (data && data.services) {
    if(temporaryToggleForData){
        // cant pass a nested object to .map function so we need to transform it
        transformedData = await transformData(data);
      
        set('servicesData', transformedData); // Update IndexedDB with transformed data
        currentTime = new Date().getTime();
        set('lastFetchTime', currentTime); // Update fetch time in IndexedDB
        lastFetchTime = await get('lastFetchTime');
        console.log("Last Fetch Time:", lastFetchTime);
    }
    return transformedData
}



export const getRecommendations = (state, allServicesArr) => {
    let arr = new Array()

    const setSelectedOptions = (opt) =>{
        arr.push(opt)
    }

    // declare an array to push massageOption to
    let recommendedMassages = [];
    // get the value of the select box
    const experience = state.experience;
    const intensity = state.intensity
    const lookingFor = state.lookingFor
    const pain = state.wheresYourPain
    
    if (experience === 'No') { // No previous experience
        // ensure the array is empty
        recommendedMassages = [];
        // push to the array
        recommendedMassages.push(allServicesArr[0]); // Swedish massage
        
        // set the state from the array contents
        setSelectedOptions(recommendedMassages);
    } 
    if (intensity === "Soft" && experience === 'No') { 
        recommendedMassages = [];
        recommendedMassages.push(allServicesArr[0]); // Swedish massage
        recommendedMassages.push(allServicesArr[4]); // Hot stones
    
        setSelectedOptions(recommendedMassages);
    }
    if (intensity === "Medium" && experience === 'No') { 
        recommendedMassages = [];
        recommendedMassages.push(allServicesArr[0]); // Swedish massage
        recommendedMassages.push(allServicesArr[1]); // Sports massage
        recommendedMassages.push(allServicesArr[4]); // Hot stones
     
        setSelectedOptions(recommendedMassages);
    }     
    if (intensity === "Hard" && experience === 'No') { 
        recommendedMassages = [];
        recommendedMassages.push(allServicesArr[1]); // Sports massage
        recommendedMassages.push(allServicesArr[2]); // Deep Tissue
        recommendedMassages.push(allServicesArr[3]); // Cupping
    
        setSelectedOptions(recommendedMassages);
    }
    if(experience === "Yes"){
        recommendedMassages = [];
        recommendedMassages.push(allServicesArr[0]); // Swedish massage
        recommendedMassages.push(allServicesArr[1]); // Sports massage
        recommendedMassages.push(allServicesArr[4]); // Hot stones
        if(allServicesArr.length >= 4){
            for(let i = 5; i < allServicesArr.length; i++){ // added massages
                recommendedMassages.push(allServicesArr[i]);
            }
        }
     
        setSelectedOptions(recommendedMassages);
    }
    if(intensity === "Soft" && experience === "Yes"){
        recommendedMassages = [];
        recommendedMassages.push(allServicesArr[0]); // Swedish massage
        recommendedMassages.push(allServicesArr[1]); // Sports massage
     
        setSelectedOptions(recommendedMassages);
    }
    if(intensity === "Medium" && experience === "Yes"){
        recommendedMassages = [];
        recommendedMassages.push(allServicesArr[0]); // Swedish massage
        recommendedMassages.push(allServicesArr[1]); // Sports massage
        recommendedMassages.push(allServicesArr[3]); // Cupping
   
        setSelectedOptions(recommendedMassages);
    }
    if(intensity === "Hard" && experience === "Yes"){
        recommendedMassages = [];
        recommendedMassages.push(allServicesArr[1]); // Sports massage
        recommendedMassages.push(allServicesArr[2]); // Deep Tissue
        recommendedMassages.push(allServicesArr[3]); // Cupping
        recommendedMassages.push(allServicesArr[4]); // Hot stones
      
        setSelectedOptions(recommendedMassages);
    }
    return recommendedMassages
}