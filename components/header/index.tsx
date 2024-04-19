import Logo from "./logo";
import Nav from "./menu";
import Sidebar from "./sidebar";
import JumpToContent from "./util/jumpToContent";
import HeaderWrapper from "./util/wrapper";

export default function Header() {
  return (
    <>
      <JumpToContent />
      <HeaderWrapper>
        <div className="flex items-center gap-12">
          <Logo />
          <Nav />
        </div>
        <Sidebar />
      </HeaderWrapper>
    </>
  );
}
