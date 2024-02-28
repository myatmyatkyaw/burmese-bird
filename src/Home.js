import React from 'react'
import { Link } from 'react-router-dom/cjs/react-router-dom'
import Bird from './bird.png'
import Feather from './feather2.png'
import Facebook from './facebook.png'
import { FcIdea } from "react-icons/fc";


const Home = () => {
  return (
    <div className='container'>
    <div className='home-bird pt-5'>
      {/* <h1 className='text-center'>Welcome to Bird</h1> */}
      <div className='container'>
        <div className='row justify-content-center'>
          <div className='col-md-11'>
            <div className='row'>
              <div className='card card-body col-md-5 shadow mx-auto'>
                <div className='row justify-content-evenly'>
                  <div className='col-md-4 pe-1 '>
                    <div className="bird-image mt-3 me-2">
                      <Link to="/birds">
                        <img src={Bird} alt="Bird" style={{ width: 250, height: 250 }} />
                      </Link>
                    </div>
                  </div>
                  <div className='col-md-8 '>
                    <p className='textleft pt-5 ps-5 ms-5 textlight'>Bird</p>
                    <h2 className='textleft ps-5 ms-5 mb-4 text-light'>ငှက်</h2>
                    <p className='textleft ps-5 ms-5 textlight'>ငှက်သည် အမွှေးအတောင်ရှိ၍ အတောင်ပံနှစ်ဖက်ရှိသော သွေးနွေးသတ္တဝါအမျိုးအစားတွင် ပါဝင်သည်။</p>
                  </div>
                </div>
              </div>
              <div className='col-md-6'>
                <div className='row d-flex justify-content-evenly'>
                  <div className='card col-md-11 moving-text-container mb-3 ms-4'>
                    <p className='moving-text pt-2 textlight' style={{ whiteSpace: 'nowrap' }}>ငှက်သည် အမွှေးအတောင်ရှိ၍ အတောင်ပံနှစ်ဖက်ရှိသော သွေးနွေးသတ္တဝါအမျိုးအစားတွင် ပါဝင်သည်။ သို့သော် အားလုံး ပျံသန်းနိုင်စွမ်း မရှိကြပေ။ အချို့ငှက်များသည် အလွန်အပြေးသန်သူများဖြစ်ကြပြီး အချို့ကတော့ အလွန်ရေကူး ကျွမ်းကျင်သူများ ဖြစ်ကြသည်။ ငှက်သည် ကျောရိုးရှိသတ္တဝါဖြစ်ပြီး ဥ,ဥတတ်သော သတ္တဝါအမျိုးအစားလည်း ဖြစ်သည်။ ဥက ပေါက်ဖွားလာသော ကလေးငယ်များကို စောင့်ရှောက်လေ့ ရှိကြသည်။</p>
                  </div>
                  <div className='card col-md-5 '>
                    <a className='card-body' href='https://my.wikipedia.org/wiki/%E1%80%84%E1%80%BE%E1%80%80%E1%80%BA'>
                      <img src={Feather} alt="feather" style={{ width: 150, height: 150 }} />
                    </a>
                    <h3 className='card-title text-light'>wikipedia</h3>
                  </div>
                  <div className='card col-md-5 '>
                    <a className='card-body' href="#">
                      <img src={Facebook} alt="feather" style={{ width: 150, height: 150 }} />
                    </a>
                    <h3 className='card-title text-light'>Contact</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* for below card */}
        <div className='row justify-content-center mt-4'>
          <div className='col-md-11'>
            <div className='row'>
              <div className='col-md-7 card card-body shadow-3 me-3 '>
                <div className='row d-flex justify-content-evenly'>
                  <div className='col-md-3 card '><h2 className='text-light'>၈၆၀၀</h2><p className='textlight'>ငှက်အမျိုးပေါင်း(မျိုးစိတ်ပေါင်း)</p></div>
                  <div className='col-md-3 card '><h2 className='text-light'>၁၆၀၀</h2><p className='textlight'>မျိုးစုပေါင်း</p></div>
                  <div className='col-md-3 card '><h2 className='text-light'>၁၅၅</h2><p className='textlight'>မျိုးရင်းပေါင်း</p></div>
                  <div className='col-md-3 card '><h2 className='text-light'>၂၇</h2><p className='textlight'>မျိုးစဉ်ပေါင်း</p></div>
                </div>
              </div>
              <div className='col-md-2 card card-body shadow-3 ms-2'>
                <h1 className='text-light'>Let's Explore Together 
                <FcIdea />
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>

  )
}

export default Home
