import styled from "styled-components"

const Container=styled.div`
flex:1;
height:70vh;
position:relative;
margin:3px;
`
const Image=styled.img`
width:100%;
height:100%;
object-fit:cover;
`
const Info=styled.div`
position:absolute;
width:100%;
height:100%;
top:0;
left:0;
display:flex;
flex-direction:column;
align-items:center;
justify-content:center;
`
const Title=styled.div`
color:white;
padding:20px;
font-size:20px;
font-weight:600;

`
const Button=styled.div`
border:none;
background-color:white;
color:grey;
font-weight:600;
padding:10px;
cursor:pointer;
`
const CategoryItem = ({ item }) => {
    return (
        <Container>
            <Image src={item.img}/>
            <Info>

                <Title>
                     {item.title}
                </Title>

                <Button>Shop Now</Button>
            </Info>

        </Container>
    )
}

export default CategoryItem