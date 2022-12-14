import React from 'react'
import React, { useEffect, useState } from 'react'

const Theme = () => {
    //alert('hiiii');
    const [theme, setTheme] = useState("light-theme");
    if(theme === "dark-theme"){
setTheme('light-theme');
    }
    else{
        setTheme('dark-theme');
    }
    useEffect(() => {
        document.body.className = theme;
    }, [theme])
  return (
    <div>Theme</div>
  )
}

export default Theme