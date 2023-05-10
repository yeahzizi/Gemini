import styled from "styled-components";

export const GenderBox = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  /* justify-content: center; */
`;

// 성별 이미지 컨테이너
export const GenderContainer = styled.div`
  position: relative;
  width: 46%;
  height: auto;
  margin: 2%;
  border: 1px solid;
  border-radius: 20px;
  &:hover {
    cursor: pointer;
  }
`;

export const GenderImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 20px;

  &:hover {
    cursor: pointer;
    filter: brightness(50%);
  }
`;