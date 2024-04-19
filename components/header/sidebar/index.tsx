import Nav from "./nav";
import TopBar from "./topbar";
import BackDrop from "./util/backdrop";
import InnerWrapper from "./util/innerWrapper";
import { MenuButton } from "./util/menuButton";

export default function Sidebar() {
  return (
    <>
      <div className="-mr-6 block h-[4.5rem] fill-[inherit] lg:hidden">
        <MenuButton />
        <BackDrop />
        {/* <SwipeArea /> */}
        <InnerWrapper>
          <TopBar />
          <Nav />
        </InnerWrapper>
      </div>
    </>
  );
}
