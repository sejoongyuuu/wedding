import React from "react";
import styled from "styled-components";

const PageUl = styled.ul`
  list-style: none;
  text-align: center;
  color: #545454;
  padding: 1px;
`;

const PageLi = styled.li`
  font-family: 'Gothic A1';
  display: inline-block;
  font-weight: 300;
  padding: 2%;
  &:hover {
    cursor: pointer;
    color: #FF7664;
  }
  &:focus::after {
    color: #FF7664;
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
    return (
        <div>
            <nav>
                <PageUl>
                    {pageNumbers.map((number) => (
                        <PageLi key={number} className="page-item">
                            <PageSpan onClick={() => paginate(number)} className="page-link">
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