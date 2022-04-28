import React from 'react'
import Checklist, { ChecklistItemType } from '../../../../Checklist/Checklist'
import EvReadOnlyHeading from '../../../../EvReadOnlyHeading/EvReadOnlyHeading'
import Icon from '../../../../Icon/Icon'
import './EvTaskList.scss'

export type EvTaskListProps = {
  outcomeContent: string
  tasks: ChecklistItemType[]
  onChange: (index: number, task: string, complete: boolean) => Promise<void>
  onAdd: (newTask: string) => Promise<void>
  onRemove: (index: number) => Promise<void>
}

const EvTaskList: React.FC<EvTaskListProps> = ({
  outcomeContent,
  tasks,
  onChange,
  onAdd,
  onRemove,
}) => {
  return (
    <div className="ev-children">
      <EvReadOnlyHeading
        headingText={outcomeContent}
        // @ts-ignore
        overviewIcon={<Icon name="activity-history.svg" />}
        overviewText={`${tasks.length} tasks`}
      />
      <div className="ev-children-outcome-list">
        <Checklist
          size="medium"
          listItems={tasks}
          onChange={onChange}
          onAdd={onAdd}
          onRemove={onRemove}
        />
      </div>
    </div>
  )
}

export default EvTaskList
