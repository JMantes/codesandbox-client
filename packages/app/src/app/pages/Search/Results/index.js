import React from 'react';

import { Hits, Pagination } from 'react-instantsearch/dom';
import Centered from '@codesandbox/common/lib/components/flex/Centered';
import WideSandbox from '@codesandbox/common/lib/components/WideSandbox';
import { sandboxUrl } from '@codesandbox/common/lib/utils/url-generator';
import Margin from '@codesandbox/common/lib/components/spacing/Margin';

import ResultInfo from '../ResultInfo';
import { Container } from './elements';

function Results() {
  return (
    <Container>
      <ResultInfo />
      <Margin bottom={2}>
        <Hits
          hitComponent={({ hit }) => (
            <WideSandbox
              selectSandbox={() =>
                window.open(sandboxUrl({ id: hit.objectID, git: hit.git }))
              }
              noHeight
              sandbox={{
                ...hit,
                title: hit.title || hit.objectID,
                id: hit.objectID,
              }}
            />
          )}
        />
      </Margin>
      <Centered horizontal>
        <Pagination />
      </Centered>
    </Container>
  );
}

export default Results;
