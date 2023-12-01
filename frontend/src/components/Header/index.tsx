import { LogOut as LogOutIcon } from 'lucide-react';

import { useAuth } from '../../hooks/useAuth';

import * as S from './styles';

export function Header() {
  const { handleLogout } = useAuth();

  return (
    <S.Container>
      <S.PageTitle>Transações</S.PageTitle>

      <S.LogOutButton type="button" onClick={handleLogout}>
        <LogOutIcon size={16} />
      </S.LogOutButton>
    </S.Container>
  );
}
