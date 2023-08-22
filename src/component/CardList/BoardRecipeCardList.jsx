import React, { useState, useEffect} from 'react';
import './CardList.css';
import Card from './Card';
import axios from 'axios';
import Pagination from '../../lib/Pagination.jsx';



const RecipeCardList = () => {
    const [cards, setCards] = useState([]);
     //초기값을 빈 배열로 설정
    
    const [currentPage, setCurrentPage] = useState(0);
    // 페이징 처리에 관련한 로직 및 상태 추가
     
    const cardsPerPage = 9;
    //한 페이지에 표시할 카드의 수를 정의 

    useEffect(() => { 
        axios.get('http://localhost:5000/recipe')
        .then(response => {
            setCards(response.data);
        })
        .catch(error => {
           //console.error('Error fetching data:', error);
        });
    }, [currentPage])
   //axios로 json데이터 가져오기
    
 
    //페이지 변경을 처리하며, 현재 페이지에 맞게 표시할 카드들을 슬라이스하여 렌더링하는 함수 
    const handlePageChange = ({ selected }) => {
        setCurrentPage(selected);
    };
 

    //현재 페이지에 표시 되어야 할 카드의 시작 위치 계산 
    //현재 페이지 * 한페이지에 표시할 카드 수 =  시작위치
    const offset = currentPage * cardsPerPage;

    //현재 페이지에 표시되어야 할 카드들의 배열 구성 
    //cards 배열에서 offset ~ offeset+cardsperPages범위를 슬라이스해서 현재 페이지에 가져온다.
    const currentCards = cards.slice(offset, offset + cardsPerPage);
        
    return (
        <div className='recipe-card-list container'>
        <div className="card-list">
            {Array.isArray(currentCards) && currentCards.map((card, index) => (
                <Card key={index} card={card} />
            ))}
                </div>
                <Pagination pageCount={Math.ceil(cards.length / cardsPerPage)} onPageChange={handlePageChange} />
           
        </div>
    );
};

export default RecipeCardList;





