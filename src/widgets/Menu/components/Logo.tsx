import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { Logo as MenuLogo } from "../../../components/Image";
import Flex from "../../../components/Box/Flex";
import { HamburgerIcon, HamburgerCloseIcon } from "../icons";
import MenuButton from "./MenuButton";

interface Props {
  isPushed: boolean;
  isDark: boolean;
  togglePush: () => void;
  href: string;
  lightLogoUrl?: string;
  darkLogoUrl?: string;
  mobileLightLogoUrl?: string;
  mobileDarkLogoUrl?: string;
}

const StyledLink = styled(Link)`
  display: flex;
  align-items: center;
  .mobile-icon {
    width: 48px;
    height: 48px;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: none;
    }
  }
  .desktop-icon {
    width: 251px;
    height: 48px;
    display: none;
    ${({ theme }) => theme.mediaQueries.nav} {
      display: block;
    }
  }
`;

const Logo: React.FC<Props> = ({
  isPushed,
  togglePush,
  isDark,
  href,
  lightLogoUrl,
  darkLogoUrl,
  mobileLightLogoUrl,
  mobileDarkLogoUrl,
}) => {
  const isAbsoluteUrl = href.startsWith("http");
  const logoUrl = isDark ? lightLogoUrl : darkLogoUrl || "";
  const mobileLogoUrl = isDark ? mobileLightLogoUrl : mobileDarkLogoUrl;

  const innerLogo = (
    <>
      <MenuLogo className="mobile-icon" src={mobileLogoUrl} />
      <MenuLogo className="desktop-icon" src={logoUrl} />
    </>
  );

  return (
    <Flex>
      <MenuButton aria-label="Toggle menu" onClick={togglePush} mr="24px">
        {isPushed ? (
          <HamburgerCloseIcon width="24px" color="textSubtle" />
        ) : (
          <HamburgerIcon width="24px" color="textSubtle" />
        )}
      </MenuButton>
      {isAbsoluteUrl ? (
        <StyledLink as="a" href={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      ) : (
        <StyledLink to={href} aria-label="Pancake home page">
          {innerLogo}
        </StyledLink>
      )}
    </Flex>
  );
};

Logo.defaultProps = {
  lightLogoUrl: "",
  darkLogoUrl: "",
  mobileLightLogoUrl: "",
  mobileDarkLogoUrl: "",
};

export default React.memo(Logo, (prev, next) => prev.isPushed === next.isPushed && prev.isDark === next.isDark);
