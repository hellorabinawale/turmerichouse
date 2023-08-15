import react, { useState } from 'react';
import View from './View';
import Form from './Form';

const App = () => {
  const data = [
    {
      id: '1',
      name: 'rabin',
      age: 28
    }, {
      id: '2',
      name: 'anisha',
      age: 25
    },
    {
      id: '3',
      name: 'karishma',
      age: 25
    }
  ]
  const [info, updateData] = useState(data);

  return (
    <div>
      <View info={info} delDatas={updateData} />
      <Form update={updateData} data={info} />
    </div>
  )
}


export default App;