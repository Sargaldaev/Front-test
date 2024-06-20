import * as React from 'react';
import { FC } from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Avatar from '@mui/material/Avatar';
import { Checkbox, ListItemSecondaryAction, useMediaQuery } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

interface Props {
  avatar: string;
  name: string;
  description?: string;
  userPlusIcon?: string;
  subtract?: string;
}

const SelectAthleteItem: FC<Props> = ({ avatar, name, description, userPlusIcon, subtract }) => {
  const isMd = useMediaQuery('(max-width:500px)');

  return (
    <List
      display={'flex'}
      sx={{
        width: '100%',
        maxWidth: 360,
        p: 0,
        bgcolor: 'background.paper',
      }}
    >
      <ListItem sx={{ pb: !description && 0 }}>
        <ListItemAvatar>
          <Avatar>
            <img src={avatar} alt="avatar" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText
          primary={
            <Box display="flex" alignItems="center">
              <Typography
                sx={{
                  fontSize: '14px',
                  fontWeight: 648,
                  marginRight: subtract ? 1 : 0,
                }}
              >
                {name}
              </Typography>
              {subtract && (
                <IconButton size="small" sx={{ padding: 0 }}>
                  <img src={subtract} alt="" />
                </IconButton>
              )}
            </Box>
          }
          secondary={
            <Typography
              sx={{
                fontSize: '12px',
                color: userPlusIcon ? '#06082C' : '#7B7EA5',
              }}
            >
              {description}
            </Typography>
          }
        />

        {userPlusIcon ? (
          <img
            src={userPlusIcon}
            alt="icon"
            style={{
              borderRadius: '10px',
              padding: '10px 14px',
              background: '#F1F3F7',
              marginLeft: 2,
            }}
          />
        ) : (
          <ListItemSecondaryAction>
            <Checkbox edge="end" />
          </ListItemSecondaryAction>
        )}
      </ListItem>
    </List>
  );
};
export default SelectAthleteItem;
