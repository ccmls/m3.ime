import { useEffect } from 'react';
import { withRouter } from 'react-router-dom';

// Função para que, ao navegar para uma página dentro do site, ela seja mostrada a partir do topo
function ScrollToTop({ history }) {
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo(0, 0);
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return (null);
}

export default withRouter(ScrollToTop);
