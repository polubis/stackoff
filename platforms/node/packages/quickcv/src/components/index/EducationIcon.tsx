import React, { FC } from "react"
import styled from "styled-components"

import { THEME } from "../../styles"

const Wrapper = styled.svg`
  width: 48px;
  height: 48px;

  path {
    fill: ${THEME.black};
  }
`

const EducationIcon: FC = () => {
  return (
    <Wrapper
      viewBox="0 0 48 48"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M40.5 36C39.8318 36.0031 39.173 36.1569 38.5725 36.45L32.1225 30H27V33H30.879L36.4515 38.5725C36.1582 39.1729 36.0038 39.8317 36 40.5C36 41.39 36.2639 42.26 36.7584 43.0001C37.2529 43.7401 37.9557 44.3169 38.7779 44.6575C39.6002 44.9981 40.505 45.0872 41.3779 44.9135C42.2508 44.7399 43.0526 44.3113 43.682 43.682C44.3113 43.0526 44.7399 42.2508 44.9135 41.3779C45.0872 40.505 44.9981 39.6002 44.6575 38.7779C44.3169 37.9557 43.7401 37.2529 43.0001 36.7584C42.26 36.2639 41.39 36 40.5 36ZM40.5 42C40.2033 42 39.9133 41.912 39.6666 41.7472C39.42 41.5824 39.2277 41.3481 39.1142 41.074C39.0007 40.7999 38.9709 40.4983 39.0288 40.2074C39.0867 39.9164 39.2296 39.6491 39.4393 39.4393C39.6491 39.2296 39.9164 39.0867 40.2074 39.0288C40.4983 38.9709 40.7999 39.0006 41.074 39.1142C41.3481 39.2277 41.5824 39.42 41.7472 39.6666C41.912 39.9133 42 40.2033 42 40.5C42 40.8978 41.842 41.2794 41.5607 41.5607C41.2794 41.842 40.8978 42 40.5 42Z" />
      <path d="M40.5 19.5C39.5723 19.5028 38.6683 19.7926 37.912 20.3298C37.1557 20.8669 36.5842 21.625 36.276 22.5H27V25.5H36.276C36.5523 26.2758 37.0366 26.9606 37.6758 27.4798C38.3151 27.999 39.0847 28.3324 39.9007 28.4438C40.7166 28.5551 41.5475 28.44 42.3025 28.1111C43.0574 27.7821 43.7074 27.252 44.1815 26.5786C44.6556 25.9053 44.9354 25.1145 44.9905 24.2929C45.0455 23.4712 44.8737 22.6502 44.4937 21.9196C44.1137 21.189 43.5402 20.5769 42.8359 20.1502C42.1316 19.7235 41.3235 19.4985 40.5 19.5ZM40.5 25.5C40.2033 25.5 39.9133 25.412 39.6666 25.2472C39.42 25.0824 39.2277 24.8481 39.1142 24.574C39.0006 24.2999 38.9709 23.9983 39.0288 23.7074C39.0867 23.4164 39.2296 23.1491 39.4393 22.9393C39.6491 22.7296 39.9164 22.5867 40.2074 22.5288C40.4983 22.471 40.7999 22.5007 41.074 22.6142C41.3481 22.7277 41.5824 22.92 41.7472 23.1667C41.912 23.4133 42 23.7033 42 24C42 24.3978 41.842 24.7794 41.5607 25.0607C41.2794 25.342 40.8978 25.5 40.5 25.5Z" />
      <path d="M40.5 3C39.3069 3.00119 38.163 3.47568 37.3193 4.31934C36.4757 5.16299 36.0012 6.30689 36 7.5C36.0051 8.21858 36.1842 8.92523 36.522 9.5595L30.894 15H27V18H32.106L38.706 11.622C39.3191 11.8894 39.9841 12.0166 40.6526 11.9945C41.3211 11.9725 41.9762 11.8016 42.5703 11.4944C43.1645 11.1872 43.6826 10.7514 44.087 10.2186C44.4915 9.68592 44.772 9.06971 44.9083 8.41489C45.0445 7.76006 45.0331 7.08309 44.8747 6.43326C44.7163 5.78343 44.415 5.1771 43.9927 4.6584C43.5705 4.13971 43.0378 3.7217 42.4336 3.43482C41.8294 3.14793 41.1689 2.99939 40.5 3ZM40.5 9C40.2033 9 39.9133 8.91203 39.6666 8.74721C39.42 8.58238 39.2277 8.34812 39.1142 8.07403C39.0007 7.79994 38.9709 7.49834 39.0288 7.20737C39.0867 6.91639 39.2296 6.64912 39.4393 6.43934C39.6491 6.22956 39.9164 6.0867 40.2074 6.02882C40.4983 5.97095 40.7999 6.00065 41.074 6.11418C41.3481 6.22771 41.5824 6.41997 41.7472 6.66665C41.912 6.91332 42 7.20333 42 7.5C42 7.89783 41.842 8.27936 41.5607 8.56066C41.2794 8.84197 40.8978 9 40.5 9Z" />
      <path d="M27 9H30V6H27C26.1452 6.00286 25.301 6.18944 24.5246 6.5471C23.7481 6.90477 23.0577 7.42515 22.5 8.073C21.9423 7.42515 21.2519 6.90477 20.4755 6.5471C19.699 6.18944 18.8548 6.00286 18 6H16.5C12.9208 6.00397 9.48932 7.42756 6.95844 9.95844C4.42756 12.4893 3.00397 15.9208 3 19.5V28.5C3.00397 32.0792 4.42756 35.5107 6.95844 38.0416C9.48932 40.5724 12.9208 41.996 16.5 42H18C18.8548 41.9971 19.699 41.8106 20.4755 41.4529C21.2519 41.0952 21.9423 40.5748 22.5 39.927C23.0577 40.5748 23.7481 41.0952 24.5246 41.4529C25.301 41.8106 26.1452 41.9971 27 42H30V39H27C26.2046 38.9992 25.442 38.6829 24.8796 38.1204C24.3171 37.558 24.0008 36.7954 24 36V12C24.0008 11.2046 24.3171 10.442 24.8796 9.87956C25.442 9.31712 26.2046 9.00079 27 9ZM18 39H16.5C13.9777 38.9955 11.5411 38.0838 9.63537 36.4314C7.72963 34.779 6.48187 32.4962 6.12 30H9V27H6V21H10.5C11.6931 20.9988 12.837 20.5243 13.6807 19.6807C14.5243 18.837 14.9988 17.6931 15 16.5V13.5H12V16.5C12 16.8978 11.842 17.2794 11.5607 17.5607C11.2794 17.842 10.8978 18 10.5 18H6.12C6.48187 15.5038 7.72963 13.221 9.63537 11.5686C11.5411 9.91622 13.9777 9.00451 16.5 9H18C18.7954 9.00079 19.558 9.31712 20.1204 9.87956C20.6829 10.442 20.9992 11.2046 21 12V18H18V21H21V27H18C16.8069 27.0012 15.663 27.4757 14.8193 28.3193C13.9757 29.163 13.5012 30.3069 13.5 31.5V34.5H16.5V31.5C16.5 31.1022 16.658 30.7206 16.9393 30.4393C17.2206 30.158 17.6022 30 18 30H21V36C20.9992 36.7954 20.6829 37.558 20.1204 38.1204C19.558 38.6829 18.7954 38.9992 18 39Z" />
    </Wrapper>
  )
}

export default EducationIcon