import { useState } from 'react'
import './App.css'
import Switcher from './components/Switcher'
import { useTranslation } from 'react-i18next'

// IMG

import Logo from "/img/Group 91.png"
import Instagram from "/img/Frame 73.png"
import One from "/img/Intersect.png"
import Two from "/img/Intersect (3).png"
import Theree from "/img/Intersect (1).png"
import Four from "/img/Intersect (2).png"
import Five from "/img/Intersect (4).png"
import Ecvator from "/img/Frame 63.png"
import Spot from "/img/Ellipse 39.png"
import Spot2 from "/img/Ellipse 36.png"

import Text1 from "/img/Text1.png"
import Text2 from "/img/Text2.png"
import Text3 from "/img/Text3.png"

import Art1 from "/img/Group 65 (1).png"
import Art2 from "/img/Group 67.png"
import Art3 from "/img/Rectangle 67.png"
import Art4 from "/img/Rectangle 82.png"
import Art5 from "/img/Rectangle 83.png"


// MUI  

import Button from '@mui/material/Button';


// Card

import Card from './components/Card'
import { Card2 } from './components/Card'

function App ()  {

  const [ lng , setLng ] = useState ( "en" )
  const { t , i18n } = useTranslation ()
  const changeLanguage = (language) => {
    i18n.changeLanguage(language)
  }

  return (
    <>
    <div className='dark:bg-[1E2328] text-white dark:text-white overflow-hidden'>
      
      <div className='Fon'>

<br />
        <div className='Prozrach p-[4px] flex justify-evenly items-center mb-[10px] sm:h-[8vh] sm:rounded-[40px] sm:mb-[25px]'>
          
        <img src={Logo} alt="error"  className='w-[90px] sm:w-[8%]'/>

        <ul className='hidden sm:flex sm:justify-around sm:w-[40%] font-medium'>
          <li className='hover:text-red-600 cursor-pointer transition-[0.2s]'>{t("navbar.li1")}</li>
          <li className='hover:text-red-600 cursor-pointer transition-[0.2s]'>{t("navbar.li2")}</li>
          <li className='hover:text-red-600 cursor-pointer transition-[0.2s]'>{t("navbar.li3")}</li>
          <li className='hover:text-red-600 cursor-pointer transition-[0.2s]'>{t("navbar.li4")}</li>
        </ul>
      <Switcher />

      <select value={lng}
      className='h-[5vh] transition-[1s] hover:bg-gray-600 dark:hover:bg-gray-600  hover:text-[#F5B301] pl-[10px] pr-[10px] rounded-[5px] dark:bg-[#1E2328] bg-[#F5B301] dark:text-[#F5B301] text-[#1E2328]'
      onChange={(event) => { changeLanguage ( event . target . value )
      setLng (event.target.value)}}>
        <option value="en">Eng</option>
        <option value="ru">Rus</option>
      </select>

      </div>

<div className='sm:block'>
  
      <h2 className='sm:text-left sm:text-[30px] text-[20px] font-bold text-center w-[70%] ml-[15%] mb-[15px] dark:text-sky-500 text-orange-500'>
        {t("sistema.h2")}
      </h2>

      <h1 className='sm:text-left sm:text-[70px] sm:w-[80%] text-[20px] font-black text-center mb-[10px] sm:ml-[15%]  text-sky-500 dark:text-orange-500'>
        {t("sistem.h1")}
      </h1>

      <p className='sm:text-left sm:w-[40%] sm:text-[21px] sm:font-medium  text-gray-200 font-mono text-center mb-[10px] sm:ml-[15%] dark:text-white '>
        {t("sistema.p")}
      </p>

<div className='flex justify-evenly sm:w-[70%] sm:ml-[40px]'>
      <Button size='small' color='error' className='h-[7vh] sm:h-[5vh] dark:bg-slate-800 text-black' variant="contained">{t("sistema.btn1")}</Button>
      <Button size='small' color='inherit' className='h-[7vh] w-[60%] sm:h-[5vh] sm:w-[35%] dark:border-[red] dark:text-[yellow]' variant="outlined">{t("sistema.btn2")}</Button>
</div>

</div>

      </div>

      <img src={Ecvator} alt="error" className='mt-[15px]' />
      <div>
      <hr className='mt-[40px] border-[1px] border-[#AFAFAF]'/>
      <p className='text-[#AFAFAF] font-bold'>01</p>
      </div>

      <Card span={t("section1.span")} h1={t("section1.h1")}  p1={t("section1.p")} h2={t("section1.h2")}  p2={t("section1.p2")} h3={t("section1.h3")}  p3={t("section1.p3")}  h4={t("section1.h4")}  p4={t("section1.p4")} h5={t("section1.h5")}  p5={t("section1.p5")} h6={t("section1.h6")}  p6={t("section1.p6")} img1={One} img2={Two} img3={Theree} img4={Four} img5={Five}/>

      <div className='mt-[-350%] sm:mt-[-80%]'>
        <img src={Spot} alt="error" className='sm:ml-[45%]'/>
        <img src={Spot2} alt="error" />
      </div>

      <div className='mt-[-140%]'>
      <Card2 span={t("section2.span")} h1={t("section2.h1")}  p1={t("section2.p")} img1={Text1}  img2={Text2}  img3={Text3}  />
      </div>

      <Card span={t("section1.span")} h1={t("section1.h1")}  p1={t("section1.p")} h2={t("section1.h2")}  p2={t("section1.p2")} h3={t("section1.h3")}  p3={t("section1.p3")}  h4={t("section1.h4")}  p4={t("section1.p4")} h5={t("section1.h5")}  p5={t("section1.p5")} h6={t("section1.h6")}  p6={t("section1.p6")} img1={Art1} img2={Art2} img3={Art3} img4={Art4} img5={Art5}/>



    </div>
    </>
  )
}

export default App
