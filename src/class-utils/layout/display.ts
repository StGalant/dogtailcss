import { ClassUtility, ClassUtilResult } from '../../index.js'

export const display: ClassUtility = {
  block(): ClassUtilResult {
    return {
      display: 'block',
    }
  },
  'inline-block'(): ClassUtilResult {
    return {
      display: 'inline-block',
    }
  },
  inline(): ClassUtilResult {
    return {
      display: 'inline',
    }
  },
  flex(): ClassUtilResult {
    return {
      display: 'flex',
    }
  },
  'inline-flex'(): ClassUtilResult {
    return {
      display: 'inline-flex',
    }
  },
  table(): ClassUtilResult {
    return {
      display: 'table',
    }
  },
  'inline-table'(): ClassUtilResult {
    return {
      display: 'inline-table',
    }
  },
  'table-caption'(): ClassUtilResult {
    return {
      display: 'table-caption',
    }
  },
  'table-cell'(): ClassUtilResult {
    return {
      display: 'table-cell',
    }
  },
  'table-column'(): ClassUtilResult {
    return {
      display: 'table-column',
    }
  },
  'table-column-group'(): ClassUtilResult {
    return {
      display: 'table-column-group',
    }
  },
  'table-footer-group'(): ClassUtilResult {
    return {
      display: 'table-footer-group',
    }
  },
  'table-header-group'(): ClassUtilResult {
    return {
      display: 'table-header-group',
    }
  },
  'table-row-group'(): ClassUtilResult {
    return {
      display: 'table-row-group',
    }
  },
  'table-row'(): ClassUtilResult {
    return {
      display: 'table-row',
    }
  },
  'flow-root'(): ClassUtilResult {
    return {
      display: 'flow-root',
    }
  },
  grid(): ClassUtilResult {
    return {
      display: 'grid',
    }
  },
  'inline-grid'(): ClassUtilResult {
    return {
      display: 'inline-grid',
    }
  },
  contents(): ClassUtilResult {
    return {
      display: 'contents',
    }
  },
  'list-item'(): ClassUtilResult {
    return {
      display: 'list-item',
    }
  },
  hidden(): ClassUtilResult {
    return {
      display: 'none',
    }
  },
}
