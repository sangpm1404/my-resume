import { FC, memo } from 'react';

import Icon, { IconProps } from './Icon';

const TelegramIcon: FC<IconProps> = memo(props => (
  <Icon {...props}>
    <path
      d="M16 3C8.268 3 2 9.268 2 17s6.268 14 14 14 14-6.268 14-14S23.732 3 16 3zm6.737 10.203l-2.49 11.75c-.188.835-.676 1.04-1.366.646l-3.778-2.786-1.82 1.755c-.201.2-.369.369-.754.369l.27-3.843 6.994-6.307c.304-.27-.066-.42-.47-.15l-8.65 5.45-3.73-1.165c-.81-.254-.825-.81.17-1.196l14.61-5.64c.675-.247 1.27.165 1.05 1.156z"
      fill="currentColor"
    />
  </Icon>
));

export default TelegramIcon;