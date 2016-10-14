
import { connect } from 'react-redux';
import AllPuppies from './AllPuppies';
import { receivePuppies } from './action-creators';

const hardCodedData = [
    { id: 1, name: 'Piggly' },
    { id: 2, name: 'Wiggly' },
    { id: 3, name: 'Enheduanna Boom' },
    { id: 4, name: 'Imhotep Zoom' },
    { id: 5, name: 'Larry' },
    { id: 6, name: 'Purple' }
];

export const loadPuppies = function () {
  return function (dispatch) {
    fetch('/api/puppies')
    .then(function (res) {
      return res.json();
    })
    .then(function (puppies) {
      const action = receivePuppies(puppies);
      dispatch(action);
    })
    .catch(function (err) {
      console.error(err)
    });
  };
};

const mapStateToProps = ({allPuppies}) => ({
    allPuppies
});

// const mapDispatchToProps = dispatch => ({
//     onReceivedPuppies: () => dispatch(loadPuppies())
//     //() => dispatch(receivePuppies(hardCodedData))
// })

export default connect (
    mapStateToProps, null
    //mapDispatchToProps
)(AllPuppies);