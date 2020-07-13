import Header from '../common/Header';
import Sidebar from '../common/Sidebar';

const Layout = props => {
    const {hideAside} = props;

    return(
      <div>
        <Header />
        {
            !hideAside && <Sidebar />
            
        }
        <div>
          {props.children}
        </div>
    </div>
    )
    
}
  
  export default Layout;