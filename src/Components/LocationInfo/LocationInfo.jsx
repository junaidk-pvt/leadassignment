// src/LocationInfo.js

import React, { useCallback, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import styles from './location.module.scss'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { countries } from '../../utils/constant';
import { PincodeRegex } from '../../utils/constant';
import toast from 'react-hot-toast';

const LocationInfo = () => {
  const [locationData, setLocationData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [validRegex, setValideRegex] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      postalCode: "",
    },
    mode: "all",
  }
  )
  
  const handleCountry = useCallback((e) => {
    setValideRegex(PincodeRegex(e.target.value))
  }, [validRegex])
  
  
  const onSubmit = async (data) => {
    try {
      setLoader(true)
      const response = await axios.get(`https://api.zippopotam.us/${data?.country}/${data?.postalCode}`);
      console.log('response', response)
      if (response.status === 200) {
        toast("✔️ Data Fetch Successfully")
        setLocationData(response.data);
        setLoader(false)
      }
      console.log('response', response)
    } catch (error) {
      console.error('Error fetching location information:', error?.response?.status);
      setLoader(false)
    }
  }
  
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} autoComplete='false'>
        {loader && <Spinner />}
        <div className={styles.mainFormCodeDiv}>

          <h2>Postal Code Location Information</h2>
          <label>Enter Postal Code: </label>
          <div className={styles.formArea}>
            <select
              name="country"
              className={`${styles.formField} ${styles.selectFeild} ${styles.defaultIcon}`}
              placeholder="Select Country"
              {...register("country", {
                required: "Country is required.",
              })}
              onChange={(e) => { handleCountry(e) }}
            >
              <option value=""> Select Country</option>
              {countries.map((options) => {
                return (
                  <option key={options.value} value={options.value}> {options?.label}</option>
                )
              })}
            </select>
            <label className={styles.error}> {errors?.country?.message} </label>
          </div>

          <div className={styles.formArea}>
            <input
              disabled={!validRegex}
              className={`${styles.formField} ${styles.inputField}`}
              type="text"
              name="postalCode"
              // value={postalCode}
              placeholder='Enter Postal Code'
              required
              {...register("postalCode", {
                required: "PostalCode is required.",
                pattern: {
                  value: validRegex,
                  message: "Invalid PostalCode format",
                },
              })}
            />
            <label className={styles.error}> {errors?.postalCode?.message} </label>
          </div>
          <div className={styles.btnDiv}>
            <button type='reset' onClick={()=>{setLocationData(null)}}>Reset</button>
            <button type='submit'>Submit</button>
          </div>
        </div>
      </form>
      {locationData && (
        <div className={styles.mainGetCodeDiv}>
          <h3>Location Information</h3>
          <h4>Country: {locationData.country}</h4>
          <h4>State: {locationData?.places[1]?.state}</h4>
          <p> <b> City: </b>Not able to Fetch City (Not there)</p>
          
          {locationData?.places.map((city)=>{
            return(
              <p>Places: {city['place name']} </p>
            )
          })}
        </div>
      )}
    </>
  );
};

export default LocationInfo;
