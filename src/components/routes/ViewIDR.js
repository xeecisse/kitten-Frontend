// import { useEffect, useState } from 'react';
// import { CustomButton, CustomTable, SearchBar } from './components/UI';
// import CustomCard from './components/UI/CustomCard';
// import { useNavigate } from 'react-router-dom';
// import { themeClass } from './variables';
// import { Col } from 'reactstrap';
// import inmate from './inmate.png'
// import Notification from './Notification';

// function ViewIDR() {
//   const [list, setList] = useState([]);
//   const [filterText, setfilterText] = useState('')
//   const [loading, setLoading] = useState();
//   const [IDR, setViewIDR] = useState()

//   const getIDR = () => {
//     fetch('http://127.0.0.1:34567/get_dashboard?Inmatetype=Transfer In')
//       .then((resp) => resp.json())
//       .then((TransferIn) => {
//         // setLoading(false);
//         console.log(TransferIn);
//         //   setModalIsOpen(true);
//         setViewIDR(TransferIn.results);
//       })
//       .catch((err) => {
//         // setLoading(false);
//         console.log(err);
//       });
//   };
//   useEffect(() => {
//     getIDR();
//   }, []);
//   const navigate = useNavigate();
//   const fields = [
//     { title: 'Name', value: 'fullname' },
//     { title: 'Age', value: 'Age' },
//     { title: 'Gender', value: 'gender' },
//     { title: 'Sentence Type', value: 'Sentence_type' },
//     { title: 'Cell No', value: 'Cell_No' },
//     { title: 'Legal Aid', value: 'Legal_Aid' },
//     { title: 'Prison No', value: 'Prison_Number' },
//     { title: '', custom: true, component: item => <div>{item.inmate_count}</div> },
//   ];

//   useEffect(() => {
//     getIDR();
//   }, []);
  
//   let finalList = [];
//   list.forEach(item => {
//     if(item.Prison_Number.indexOf(filterText) === -1) return;
//     finalList.push(item)
//   })
//   return (
//     <div>
//       <Col>
//          <CustomCard icon={<img src={inmate} alt=''/>} header= 'ATP Inmates'>
//          {JSON.stringify(IDR)}
      
//         <SearchBar filterText={filterText} onFilterTextChange={setfilterText} />
//         <CustomTable size='sm' fields={fields} data={finalList} />
//         {/* {JSON.stringify(list)} */}
//       </CustomCard>

//       </Col>
//       <Col md={4}>
      
//       </Col>
//          </div>
//   );
// }

// export default ViewIDR;
