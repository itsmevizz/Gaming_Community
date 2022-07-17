import React from "react";
import "../index.css";

function darkMode() {
  return (
    <div className=" shadow-sm right-16 bottom-10 fixed ">
      <label
        for="checked-toggle" 
        class="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="checked-toggle"
          class="sr-only peer"
        />
        <div class="w-12 h-6 bg-gray-200 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 dark:bg-gray-700 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
        <span class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
          {/* Dark */}
        </span>
      </label>
    </div>
  );
}

export default darkMode;
