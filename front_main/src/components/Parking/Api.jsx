// import React, { useState,useEffect } from "react";
// import axios from 'axios';

// const baseUrl = 'http://i7c103.p.ssafy.io:8000/review/'

// export default function Parking_data() {
//   const [parkingData, setParkingData] = useState(null)

//   const fetchData = async () => {
//     const response = await axios.get(baseUrl)
//     setParkingData(response.data);
//     console.log(response);
//     };


//   useEffect(() => {
//     axios.get(baseUrl)
//          .then(response => setParkingData(response.data))
//     // 위와 같은코드
//     // axios({
//     //   method:'GET',
//     //   url:'baseUrl',
//     // }).then(response => setParkingData(response.data))
//   });

//   // 위의 useEffect()와 같은 코드
//   // useEffect(() => {
//   //   fetchData
//   // }, []);
  
//   // const parkingInfor = async (e) => {
//   //   e.preventDefault();
//   //   const parkingName = e.target.parkingName.value;
//   //   await axios.post(baseUrl, { parkingName });
//   //   fetchData();
//   // };

//   return (
//     <div className='api'>
//       <h1>주차장 정보 출력</h1>
//       <form onSubmit={parkingInfor}>
//         {parkingData.map((parking) => {
//           <div key={respons.id}>
//             <div>주차장 No : {parking.ID}</div>
//             <div>{parking.emptySpotNow} / {parking.totalSpot}</div>
//             <div>{parking.emptySpotList}</div>
//           </div>
//         })}
//       </form>
//     </div>
//   );
// };

// 해당 방식으로 사용 하였을 때 cosloe.log에 Backend에 있는 데이터가 찍힌다.
// import Parking from './Parking'

// export default async function FetchMyPage() {
//   const response = await fetch("http://i7c103.p.ssafy.io:8000/review/")
//   const json = await response.json();
//   console.log(json)
//   console.log(json.ENABLE)
//   return json 
// }

import React, {useState, useEffect} from 'react';
import axios from 'axios'
import Parking from './Parking' // props를 위한 Parking import

const baseURL = 'http://i7c103.p.ssafy.io:8000/review/' // 기본 url


const Datas = () => {
  const [datas, setDatas] = useState([]); // useState를 통한 datas 값 저장 
  // 재사용을 위한 함수 선언
  const getDatas = async() => {
    const response = await axios.get(baseURL);
    setDatas(response.data)
    console.log(response.data.ENABLELIST)
  }

  // useEffect 안 함수 작동
  useEffect(() => {
    getDatas()
  }, [])
  

  // useEffect(() => {
  //   axios.get(baseURL)
  //     .then(response => {
  //       setDatas(response.data);
  //       console.log(datas)
  //       console.log(datas.ENABLELIST)
  //       console.log(typeof(datas.ENABLELIST))
  //       console.log(typeof(datas.ENABLELIST[0]))
  //     });
  // }, [])
  
  // useEffect(() => {
  //   const getDatas = async () => {
  //     const datas = await axios.get(baseURL);
  //     setDatas(datas.data);
  //   };
   
  //   getDatas();
  // }, []);



  return (
    <>
    <Parking datas={datas}/>
    {/* Parking.jsx에 props를 하기 위한 코드 작성(부모 자식 사이) */}
      <div>
        <button onClick={getDatas}>클릭 시 업데이트</button>
        {/* 클릭시 getDatas 함수 실행하여 서버에서 받은 데이터 화면에 출력 */}
      </div>
      <div>
        {datas.ENABLELIST}
      </div>
    </>
  )
}

export default Datas
// api 정보(확정X)
// "TIME": "2022-07-25T06:13:12",
// "SERIAL_ID": "idsample",
// "ENABLE": 5,
// "OCUPIEDLIST": "[1,3,5,7,9]",
// "TOTAL": 10,
// "ENABLELIST": "[2,4,6,8,10]"



