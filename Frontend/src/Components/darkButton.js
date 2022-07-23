import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import "../index.css";
import { dark, light} from "../redux/features/darkMode";

function DarkMode(props) {
  const dispatch = useDispatch()
  const {value} = useSelector((state) => state.dark)
  const darkMode = () => {
    if (value === "") {
      dispatch(dark())
    }else{
      dispatch(light())
    }
  }
  return (
    <div className={`mr-5 top-0 ${props.value}`}>
      <label
        for="checked-toggle"
        class="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value={value? "checked" : ''}
          id="checked-toggle"
          class="sr-only peer"
          onClick={darkMode}
        />
        {value ? <div  class="fixed w-12 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div> : <div  class="fixed w-12 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>}
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
         
        </span>
      </label>
    </div>
  );
}

export default DarkMode;
