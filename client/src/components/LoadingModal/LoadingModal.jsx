import { useEffect, useState } from 'react';
import { Modal, Button } from 'react-bootstrap';
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux';

export default function LoadingModal() {
  const loadingModal = useSelector((state) => state.loadingModal);
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setTimeout(() => { // after some fake time, component will stop with render
      setLoaded(true);
    }, 3500);
  }, []);

  const handleClose = () => {
    dispatch({ type: 'SET_CHANGE_SHOW', payload: !loadingModal });
    setLoaded(!loaded);
  };

  return (
    <div
      className="modal show"
      style={{ display: 'block', z_index: '9999' }}
    >
      <Modal.Dialog>
        <Modal.Header>
          {loaded ? <Modal.Title>✅</Modal.Title>
            : <Spinner animation="border" variant="primary" /> }
        </Modal.Header>

        <Modal.Body>
          {loaded ? <p>Saved!</p>
            : <p>Saving in the bag..</p>}
        </Modal.Body>

        <Modal.Footer>
          <Button variant="secondary" onClick={() => handleClose()}>Close</Button>
        </Modal.Footer>
      </Modal.Dialog>
    </div>
  );
}
