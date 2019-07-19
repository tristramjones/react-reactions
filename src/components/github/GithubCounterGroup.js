/* eslint-disable no-shadow */
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { listOfNames } from '../../helpers/strings'

const useStyles = makeStyles(() => ({
  group: {
    padding: '5px 10px',
    borderRight: '1px solid #ddd',
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica',
    fontSize: '14px',
    color: '#3D76C2',
    fontWeight: '500',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'relative',
    cursor: 'pointer',
    borderRadius: '3px 0 0 3px',
    '&:active': {
      background: '#f2f8fa',
    }
  },
  emoji: {
    fontSize: '15px',
    marginTop: '1px',
  },
  tooltip: {
    maxWidth: '250px',
    wordBreak: 'break-word',
    wordWrap: 'normal',
    whiteSpace: 'nowrap',
    font: `normal normal 11px/1.5 -apple-system, BlinkMacSystemFont, "Segoe UI",
      Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol"`,
    color: '#fff',
    background: 'rgba(0,0,0,0.8)',
    borderRadius: '3px',
    padding: '5px 8px',
    position: 'absolute',
    top: '100%',
    left: '15px',
    marginTop: '4px',
    opacity: '0',
    transition: 'opacity 0.1s ease-in-out',
    '&:hover': {
      opacity: '1',
    }
  },
}))

const GithubCounterGroup = ({ emoji, count, onSelect, names }) => {
  const classes = useStyles();
  const handleClick = () => {
    onSelect(emoji)
  }

  return (
    <div className={ classes.group } onClick={ handleClick }>
      <span className={ classes.emoji }>{ emoji }</span> { count }
      <div className={ classes.tooltip }>{ listOfNames(names) }</div>
    </div>
  )
}

export default GithubCounterGroup
