import styled from '@emotion/styled';

export const ProfileDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: bisque;
  padding-top: 60px;
  padding-bottom: 60px;
`;

export const Description = styled.div`
  background-color: #eeeed9;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 10px;
  width: 350px;
  border: 1px solid #0f0f4f;
`;
export const PhotoAvatar = styled.img`
  display: block;
  height: 220px;
  width: 200px;
  margin-top: 20px;
  border-radius: 50%;
`;
export const NameUser = styled.p`
  font-size: 22px;
  line-height: 1.62;
  font-weight: 20px;
  color: #0f0f4f;
  margin-top: 20px;
`;
export const TagUser = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.58;
  font-weight: 18px;
  color: #484137;
`;
export const LocationUser = styled.p`
  margin-top: 10px;
  font-size: 16px;
  line-height: 1.58;
  font-weight: 18px;
  color: #484137;
`;
export const Stats = styled.ul`
  background-color: #fff;
  width: 100%;
  display: flex;
  margin: 0 auto;
  padding: 0;
  align-items: center;
  justify-content: center;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  border-top: 1px solid #0f0f4f;
`;
export const ItemsStats = styled.li`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  :nth-last-of-type(1n) {
    border-right: 1px solid #0f0f4f;
  }
  padding: 5px;
`;
export const SpanLabel = styled.span`
  display: flex;
  font-size: 16px;
  line-height: 1.62;
  font-weight: 16px;
  text-align: center;
  color: #484137;
`;

export const SpanQuantity = styled.span`
  color: #0f0f4f;
  text-align: center;
  font-size: 16px;
  line-height: 1.58;
  font-weight: 18px;
  margin: 10px auto;
`;