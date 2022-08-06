import React from "react";
import styled from "styled-components";

const PageUl = styled.ul`
  font-family: 'Gothic A1';
  list-style: none;
  text-align: center;
  font-weight: 300;
  color: #828282;
  padding: 1px;
`;

const PageLi = styled.li`
  font-family: 'Gothic A1';
  display: inline-block;
  font-weight: 700;
  padding: 2%;
  &:hover {
    cursor: pointer;
    color: #FD3C22;
  }
  &:focus::after {
    color: #FD3C22;
  }
`;

const PageSpan = styled.span`
  &:hover::after,
  &:focus::after {
    color: white;
  }
`;

const Pagination = ({postsPerPage, totalPosts, paginate, currentPage}) => {
    const pageNumbers = [];
    for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
        pageNumbers.push(i);
    }
    console.log('currentPage: ' + currentPage);

    return (
        <div>
            <nav>
                <PageUl>
                    {pageNumbers.map((number) => (
                        <PageLi key={number} className="page-item">
                            <PageSpan onClick={() => paginate(number)} className="page-link">
                                <span style={{color: currentPage == number ? '#FD3C22' : '#828282'}}></span>
                                {number}
                            </PageSpan>
                        </PageLi>
                    ))}
                </PageUl>
            </nav>
        </div>
    );
};

export default Pagination;