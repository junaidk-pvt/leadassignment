// src/LocationInfo.js

import React, { useCallback, useState } from 'react';
import Spinner from '../Spinner/Spinner';
import styles from './location.module.scss'
import axios from 'axios';
import { useForm } from 'react-hook-form';
import { countries } from '../../utils/constant';
import { PincodeRegex } from '../../utils/constant';
import toast from 'react-hot-toast';
axios.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error?.response?.status === 401) {

    } else if (error?.response?.status === 403) {
      console.log(error?.response?.data);
    } else if (error?.response?.status === 404) {
      toast("❌ Data Not Found");
    } else if (error?.response?.status === 400) {

    } else {
      alert(error?.message || "Network Error");
    }
    return Promise.reject(error);
  }
);
const LocationInfo = () => {
  const [locationData, setLocationData] = useState(null);
  const [loader, setLoader] = useState(false);
  const [validRegex, setValideRegex] = useState(null)
  const {
    register,
    handleSubmit,
    formState: { errors },
    setError,
    clearErrors
  } = useForm({
    defaultValues: {
      postalCode: "",
    },
    mode: "all",
  }
  )
  console.log('errors', errors)
  const handleCountry = useCallback((e) => {
    setValideRegex(PincodeRegex(e.target.value))
  }, [validRegex])
  // const handlePostalCode = () => {
  //   if (!validRegex) {
  //     setError('postalCode', { type: "required", message: "First Select Country" }, { mode: "all" });
  //   } else {
  //     clearErrors('postalCode');
  //   }
  // }

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
          <div className={styles.formArea}>
            <select
              name="country"
              className={`${styles.formField} ${styles.selectFeild} ${styles.defaultIcon}`}
              {...register("country", {
                required: "Country is required.",
              })}
              onChange={(e) => { handleCountry(e) }}
            >
              <option value=""> Select Country *</option>
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
              // disabled={!validRegex}
              className={`${styles.formField} ${styles.inputField}`}
              type="text"
              name="postalCode"
              placeholder='Enter Postal Code *'
              {...register("postalCode", {
                required: "PostalCode is required.",
                validate: (val, formVal) => {
                  return (
                    !formVal?.country ? "First Select Country" : true
                  );
                },
                pattern: {
                  value: validRegex,
                  message: "Invalid PostalCode format",
                },
              })}
            />

            <label className={styles.error}> {errors?.postalCode?.message} </label>
          </div>
          <div className={styles.btnDiv}>
            <button className={styles.submitButton} type='submit'>Submit</button>
            <button className={styles.cancelButton} type='reset' onClick={() => {
              setLocationData(null)
              setValideRegex(null)
            }}>Reset</button>
          </div>
        </div>
      </form>
      {locationData && (
          
        <div className={styles.mainGetCodeDiv}>
          <h2>Location Information</h2>
          <h4>Country: <span> {locationData.country} </span></h4>
          <h4>State: <span>{locationData?.places[1]?.state} </span></h4>
          <p> <b> City: </b>Not able to Fetch City (Not there)</p>
          <p><b> Places:</b>
          {locationData?.places.map((city) => {
            return (
               <span> {city['place name']}, </span> 
            )
          })}
          </p>
          
        </div>
      )}
    </>
  );
};

export default LocationInfo;
