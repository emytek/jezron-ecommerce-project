import { css } from "styled-components";

export const mobile = (props) => {
  return css`
    @media only screen and (max-width: 575.98px) {
      ${props}
    }  
  `;
};

export const landScape = (props) => {
    return css`
      @media (min-width: 576px) and (max-width: 767.98px) {
        ${props}
      }  
    `;
};

export const tablets= (props) => {
    return css`
      @media (min-width: 768px) and (max-width: 991.98px) {
        ${props}
      }  
    `;
};

export const large= (props) => {
    return css`
      @media (min-width: 992px) and (max-width: 1199.98px) {
        ${props}
      }  
    `;
};