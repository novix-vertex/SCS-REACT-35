import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment } from './redux/slices/counterSlice';
import { changeThemeToDark, changeThemeToLight } from './redux/slices/themeSlice';

const App = () => {

  const number = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.theme.value);

  const dispatch = useDispatch();
  return (
    <main>
      <div>
        <h1>{number}</h1>
        <h2>{theme}</h2>
      </div>
      <div class="btns">
        <button onClick={() => { dispatch(decrement()) }} class="decr">-</button>
        <button onClick={() => { dispatch(increment()) }} class="incr">+</button>
        <button onClick={() => { dispatch(changeThemeToLight()) }} class="incr">Change to Light</button>
        <button onClick={() => { dispatch(changeThemeToDark()) }} class="incr">Change to Dark</button>
      </div>
    </main>
  )
}

export default App