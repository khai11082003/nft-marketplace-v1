import React from 'react';
import {
  AppBar,
  Box,
  Button,
  Divider,
  Drawer,
  Grid,
  List,
  ListItem,
  ListItemButton,
  Typography,
  Stack,
  useScrollTrigger,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import './index.scss';
import { Link } from 'react-router-dom';

export const style = {
  li: 'hover:text-[#D01498] cursor-pointer',
};

type Anchor = 'left';

export default function HeaderApp () {
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 0,
  });
  const [drawer, setDrawer] = React.useState({ left: false });

  const toggleDrawer =
    (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setDrawer({ ...drawer, [anchor]: open });
    };

  const MenuItems = [
    {
      label: 'Home',
      link: '/',
    },
    {
      label: 'Sellers',
      link: '#Instruction',
    },
    {
      label: 'Collectibles',
      link: '#features',
    },
    {
      label: 'Owner',
      link: '#academy',
    },
    {
      label: 'About',
      link: '#partners',
    },
    {
      label: 'List to Market',
      link: '#partners',
    },
  ];

  type MyState = {
    status: boolean;
  };

  const [status, setStatus] = React.useState<MyState>({
    status: false,
  });

  const setState = ({ status }: any) => {
    setStatus({
      status: !status,
    });
  };

  return (
    <div className=' bg-[#00000000] text-white flex items-center py-[35px] w-[100%] mx-auto container'>
      <ul className='flex justify-between w-[100%] items-center'>
        {' '}
        <Grid
          container
          spacing={1}
          alignItems='center'
          className='relative'
          justifyContent='space-between'
        >
          <div className='lg:hidden xs:flex'>
            {' '}
            <Grid item xs={2}>
              {(['left'] as const).map(anchor => (
                <React.Fragment key={anchor}>
                  <Button
                    variant='outlined'
                    className='w-[10px]'
                    onClick={toggleDrawer(anchor, true)}
                    sx={{ color: 'primary' }}
                  >
                    <MenuIcon />
                  </Button>
                  <Drawer
                    anchor={anchor}
                    open={drawer[anchor]}
                    onClose={toggleDrawer(anchor, false)}
                    PaperProps={{ sx: { backgroundColor: '#020617' } }}
                    className='opacity-[0.98]'
                  >
                    <Box
                      className='pt-4 backdrop-blur-2xl h-screen relative'
                      sx={{ width: 240 }}
                      role='presentation'
                      onClick={toggleDrawer(anchor, false)}
                      onKeyDown={toggleDrawer(anchor, false)}
                    >
                      <Divider className='pt-5 border-gray-600' />
                      <List>
                        {MenuItems.map(item => (
                          <ListItem disablePadding key={item.label}>
                            <Link to={item.link}>
                              <ListItemButton className='w-[240px]  py-4 text-white'>
                                <Typography
                                  variant='body1'
                                  className='text-white '
                                >
                                  {item.label}
                                </Typography>
                              </ListItemButton>
                            </Link>
                          </ListItem>
                        ))}
                      </List>
                      <List className='absolute bottom-8'>
                        <ListItem className='w-[240px] justify-center py-4'>
                          {/* ... */}
                        </ListItem>
                      </List>
                    </Box>
                  </Drawer>
                </React.Fragment>
              ))}
            </Grid>
          </div>
          <div className='lg:flex xs:hidden '>
            {' '}
            <Grid item xs={8} className='justify-center'></Grid>
            <Grid item className='items-center flex'>
              <Stack
                spacing={{ md: 2, lg: 4 }}
                direction='row'
                sx={{ display: { xs: 'none', md: 'flex' } }}
                alignItems='center'
              >
                {MenuItems.map(item => (
                  <Link to={item.link} key={item.label} className='text-light'>
                    <Typography
                      variant='body1'
                      className='hover:brightness-75 hover:text-underline underline-offset-8'
                    >
                      {item.label}
                    </Typography>
                  </Link>
                ))}
              </Stack>
            </Grid>
          </div>
        </Grid>
        <div className='flex items-center'>
          <li>
            <button className='px-[5px] py-[2px]'> Create NFT & 1155</button>
          </li>
          <li>
            <button className='px-[5px] py-[2px]'>Connect Wallet</button>
          </li>
        </div>
      </ul>
    </div>
  );
}
