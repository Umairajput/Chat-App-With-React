import React from 'react';
import { Button, notification } from 'antd';

const key = 'updatable';

const Buttonnn = () => {
  const [api, contextHolder] = notification.useNotification();
  const openNotification = () => {
    api.open({
      key,
      message: 'Alert',
      description: 'Please FIll This Field.',
    });

    
  };

  return (
    <>
      {contextHolder}
      <Button type="primary"  className="button" onClick={openNotification}>
        Register
      </Button>
    </>
  );
};

export default Buttonnn;