import React, { FC } from "react";
import { useHistory } from "react-router-dom";
import OpenPayModalButton from "../../components/profile/pay/button/OpenPayModalButton";
import PayModal from "../../components/profile/pay/modal/PayModal";
import {
  Desc,
  EditButton,
  FollowingAndPayWrappter,
  FollowingTextWrapper,
  MyBgImg,
  MyInfoContentWrapper,
  MyInfoSpace,
  MyInfoWrapper,
  MyProfileContentWrapper,
  MyProfileImg,
  MyProfileTextWrapper,
  MyProfileWrapper,
  Nickname,
  NumText,
} from "./UserProfile.styles";
// import { MyProfileWrapper } from "../../components/profile/myprofile/MyProfileComp.styles";

const MyProfile: FC = () => {
  const history = useHistory();

  const moveDonation = () => {
    history.push("/Mypage/Donation");
  };

  const moveMyInfo = () => {
    history.push("/Mypage/MyInfoManage");
  };

  const moveReview = () => {
    history.push("/Mypage/MyReview");
  };

  return (
    <>
      <MyProfileWrapper>
        <MyInfoWrapper>
          <MyBgImg></MyBgImg>
          <MyInfoSpace></MyInfoSpace>
          <MyInfoContentWrapper>
            <MyProfileImg></MyProfileImg>
            <MyProfileTextWrapper>
              <Nickname>닉네임</Nickname>
              <Desc>
                자기소개 부분: 내가 좋아하는 세계관, 캐릭터 등등을 적어보자 자
                뭘 좋아하는 지 적어보세요
              </Desc>
              <EditButton>수정하기</EditButton>
            </MyProfileTextWrapper>
            <FollowingAndPayWrappter>
              <FollowingTextWrapper>
                <NumText>
                  150
                  <br />
                  팔로워
                </NumText>
                <NumText>
                  20
                  <br />
                  팔로잉
                </NumText>
                <NumText>
                  30
                  <br />
                  별조각
                </NumText>
              </FollowingTextWrapper>
              <PayModal />
            </FollowingAndPayWrappter>
          </MyInfoContentWrapper>
        </MyInfoWrapper>
        <MyProfileContentWrapper></MyProfileContentWrapper>
      </MyProfileWrapper>
    </>
  );
};
export default MyProfile;
