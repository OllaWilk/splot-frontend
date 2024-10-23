import React from 'react';
import { useToggle } from '../../../utils/hooks';
import { ControlPanel, EventsList, LeftSidePanel } from '../../layout';
import {
  SectionCart,
  SectionHeader,
  SortBar,
  UserPanel,
  SearchBar,
  Map,
  Modal,
} from '../../common';

export const Cockpit = () => {
  const [isOpen, toggleIsOpen] = useToggle(false);

  return (
    <SectionCart>
      <LeftSidePanel>
        <SectionHeader text={'Things to do <sup>yay!</sup>'} />
        <SearchBar />
        <SortBar />
        <EventsList toggleIsOpen={toggleIsOpen} />
        {isOpen && <Modal toggleIsOpen={toggleIsOpen} isOpen={isOpen} />}
      </LeftSidePanel>
      <ControlPanel>
        <UserPanel />
        <Map />
      </ControlPanel>
    </SectionCart>
  );
};
