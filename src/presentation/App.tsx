import { getBirthdayPage } from '../application/getBirthdayPage';
import { BirthdayPage } from './pages/BirthdayPage';

export function App() {
  const profile = getBirthdayPage();

  return <BirthdayPage profile={profile} />;
}
