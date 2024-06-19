import MyStack from './src/navegation/navegation.js';
import { AuthoProvider } from './src/context/AuthContext.js';
export default function App() {
  return (
    <AuthoProvider>
      <MyStack/>
    </AuthoProvider>
  );
}