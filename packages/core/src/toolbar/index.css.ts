import { style } from '@vanilla-extract/css';
import { styles as editorStyles } from '../editor/index.css';
import { themeVars } from '../theme/index.css';

export const styles = {
  root: style({
    selectors: {
      [`${editorStyles.root} &`]: {
        padding: themeVars.space['1.5'],
        backgroundColor: themeVars.color.surface,
        color: themeVars.color.surfaceOn,
        borderRadius: themeVars.radius.medium,
        border: `1px solid ${themeVars.color.surfaceOnSlight}`,
        overflow: 'hidden',
        boxShadow: themeVars.boxShadow.level['1'],
      },
    },
  }),
  list: style({
    selectors: {
      [`${editorStyles.root} &`]: {
        display: 'flex',
        listStyle: 'none',
        margin: 0,
        padding: 0,
      },
    },
  }),
  item: style({
    selectors: {
      [`${editorStyles.root} &`]: {
        paddingRight: themeVars.space['1'],
        marginRight: themeVars.space['1'],
        borderRight: `1px solid ${themeVars.color.surfaceOnFaint}`,
      },
      [`${editorStyles.root} &:last-child`]: {
        paddingRight: 0,
        marginRight: 0,
        borderRight: 'none',
      },
    },
  }),
  buttonBox: style({
    selectors: {
      [`${editorStyles.root} &`]: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'currentColor',
        padding: 0,
        display: 'flex',
        placeItems: 'center',
        fontSize: themeVars.fontSize.label.medium,
        whiteSpace: 'nowrap',
        cursor: 'pointer',
      },
    },
  }),
  featureIcon: style({
    selectors: {
      [`${editorStyles.root} &`]: {
        display: 'flex',
        placeItems: 'center',
        width: 20,
        height: 20,
        color: themeVars.color.brand,
        marginRight: themeVars.space[0.5],
      },
    },
  }),
  dropDownIcon: style({
    selectors: {
      [`${editorStyles.root} &`]: {
        display: 'block',
        width: 20,
        height: 20,
        color: themeVars.color.backgroundOnSlight,
      },
    },
  }),
  moreButton: style({
    selectors: {
      [`${editorStyles.root} &`]: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        borderStyle: 'solid',
        borderColor: 'currentColor',
        display: 'block',
        width: 20,
        height: 20,
        padding: 0,
        color: themeVars.color.backgroundOnSlight,
        cursor: 'pointer',
      },
    },
  }),
};
