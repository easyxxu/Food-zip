import axios from "axios";
import React, { useEffect, useState } from "react";
import debounce from "lodash/debounce";
import { useNavigate } from "react-router-dom";
import {
  SearchWrapper,
  List,
  ProfileImg,
  TextWrap,
  UserName,
  UserID,
} from "./SearchListStyle";

export default function SearchList({ searchKeyword }) {
  const navigate = useNavigate();

  function handleClick(accountname) {
    const where = localStorage.getItem("accountname");
    if (accountname === where) {
      navigate("/myprofile", {
        state: {
          accountname: accountname,
        },
      });
    } else {
      navigate(`/profile/${accountname}`, {
        state: {
          accountname: accountname,
        },
      });
    }
  }

  const [searchListData, setSearchListData] = useState([]);
  const debouncedSearchKeyword = debounce(keyword => {
    fetchData(keyword);
  }, 300);

  const fetchData = async keyword => {
    if (!keyword) {
      return;
    } else {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(
          `https://api.mandarin.weniv.co.kr/user/searchuser/?keyword=${keyword}`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
              "Content-type": "application/json",
            },
          },
        );

        const filteredData = response.data.filter(
          item => !item.image.startsWith("https://mandarin.api.weniv"),
        );
        setSearchListData(filteredData);
      } catch (error) {
        navigate("/error");
      }
    }
  };

  useEffect(() => {
    debouncedSearchKeyword(searchKeyword);
  }, [searchKeyword, debouncedSearchKeyword]);

  return (
    <SearchWrapper>
      {searchListData.map(searchItem => (
        <List
          key={searchItem.accountname}
          onClick={() => handleClick(searchItem.accountname)}
        >
          <ProfileImg src={searchItem.image} alt="프로필 이미지" />
          <TextWrap>
            <UserName>{searchItem.username}</UserName>
            <UserID>@ {searchItem.accountname}</UserID>
          </TextWrap>
        </List>
      ))}
    </SearchWrapper>
  );
}
