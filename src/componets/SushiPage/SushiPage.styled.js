import styled from "styled-components";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineHeart } from "react-icons/ai";

export const Container = styled.div`
  width: 100%;
`;

export const ListItems = styled.ul`
  padding: 0;
  margin-top: 80px;
  margin-left: auto;
  margin-right: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 40px;
`;

export const Item = styled.li`
  width: 260px;
  height: auto;
  list-style: none;
  /* margin-bottom: 10px; */
  border-radius: 10px;
  /* border: 1px solid #b9b9b9; */
  background-color: transparent;
`;

export const StyledImage = styled.img.attrs((props) => ({
  style: {
    opacity: props.opacity || 1,
    display: "block",
    width: "260px",
    height: "330px",
    marginLeft: "auto",
    marginRight: "auto",
    borderRadius: "10px",
  },
}))``;
//`
//   display: block;
//   width: 200px;
//   height: 250px;
//   margin-left: auto;
//   margin-right: auto;
//   border-radius: 10px 10px 10px 10px;
// `;

export const StyledInfo = styled.div`
  padding: 10px 0;
  text-align: center;
`;

export const Title = styled.h2`
  font-size: 16px;
  color: #d5cfc7;
  margin: 0;
  margin-bottom: 7px;
`;

export const Price = styled.p`
  margin: 0;
  font-size: 14px;
  letter-spacing: 1px;
  margin-bottom: 7px;
  color: #d5cfc7;
`;

export const Button = styled.button`
  width: 100%;
  margin-top: 10px;
  border: none;
  padding: 10px 7px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: bold;
  letter-spacing: 1px;
  background-color: #d5cfc7;
  color: #3a2a21;
  cursor: pointer;

  &:hover {
    color: #d5cfc7;
    background-color: #3a2a21;
    /* #3A2A21
    #D5CFC7 */
  }
`;

export const StyledStar = styled(AiOutlineHeart).attrs((props) => ({
  style: {
    position: "absolute",
    top: "10px",
    right: "15px",
    width: "30px",
    height: "30px",
    fill: props.fillColor || "red",
    stroke: props.strokeColor || "red",
  },
}))``;
