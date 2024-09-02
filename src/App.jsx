import styled from "styled-components";
import "./App.css"

function App() {
  return (
    <Container>
<TopContainer>
<div className="logo">
  
    <h3>F<span>oo</span>dy Z<span>o</span>ne</h3>
    </div>

    <div className="search">
      <input type="text" placeholder="Serch Food.." />
    </div>
</TopContainer>


    <FilterContainer>
    <Button>All</Button>
    <Button>Breakfast</Button>
    <Button>Lunch</Button>
    <Button>Dinner</Button>
    </FilterContainer>
       
<FoodCardContainer>
<FoodCard></FoodCard>

</FoodCardContainer>

    </Container>
      
  
  )
}

export default App;


const Container = styled.div`
max-width : 1200px;
margin: 0 auto;
`;
const TopContainer = styled.section`
min-height:140px;
display:flex;
justify-content:space-between;
padding:16px;
align-items:center;


.search{
input{

    background-color: transparent;
    border: 1px solid red;
    color: white;
    border-radius: 5px;
    height: 40px;
    font-size:16px ;
    padding: 0 10px;
}
}
`;

const FilterContainer = styled.section`
display:flex; 
// align-items:center;
justify-content: center;
gap:12px;

`;

const Button = styled.button`
background-color: #ff4343;
 border-radius: 5px;
 padding:16px 15px;
 border:none;
 `;

 const FoodCardContainer = styled.section`
  background-image: url("food.png");
 background-size: cover;
git init

 height:calc(100vh - 210px) ;
 `;

 const FoodCard = styled.div``;
