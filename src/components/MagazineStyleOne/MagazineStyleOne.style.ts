import styled from "styled-components";
import {DefaultStyle} from "../../assets/style/Style";


export const MagazineStyleOneBase = styled.div`

  background-color: ${DefaultStyle.primary};
  padding: ${DefaultStyle.sectionPaddingTopBottom};
  
  .b-0 {
        bottom: 0;
  }
  
    .bg-shadow {
        background: rgba(76, 76, 76, 0);
        background: -webkit-gradient(left top, left bottom, color-stop(0%, rgba(179, 171, 171, 0)), color-stop(49%, rgba(48, 48, 48, 0.37)), color-stop(100%, rgba(19, 19, 19, 0.8)));
        background: linear-gradient(to bottom, rgba(179, 171, 171, 0) 0%, rgba(48, 48, 48, 0.71) 49%, rgba(19, 19, 19, 0.8) 100%);
        filter: progid:DXImageTransform.Microsoft.gradient( startColorstr='#4c4c4c', endColorstr='#131313', GradientType=0 );
    }
    
    .top-indicator {
        right: 0;
        top: 1rem;
        bottom: inherit;
        left: inherit;
        margin-right: 1rem;
    }
    
    .overflow {
        position: relative;
        overflow: hidden;
    }
    
    .zoom img {
        transition: all 0.2s linear;
    }
    
    .zoom:hover img {
        -webkit-transform: scale(1.1);
        transform: scale(1.1);
    }
`;