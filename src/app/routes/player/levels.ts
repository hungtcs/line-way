import { OutsetTadpole, DefaultTadpole, Tadpole } from './tadpoles/public_api';

export const levels: Array<Array<Array<typeof Tadpole>>> = [
  // 1
  [
    [OutsetTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 2
  [
    [DefaultTadpole, DefaultTadpole, null],
    [OutsetTadpole,  DefaultTadpole, DefaultTadpole],
  ],
  // 3
  [
    [null,            DefaultTadpole, OutsetTadpole],
    [null,            DefaultTadpole, DefaultTadpole],
    [DefaultTadpole,  DefaultTadpole, DefaultTadpole],
  ],
  // 4
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, null,           OutsetTadpole,  DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 5
  [
    [null,           null,           DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, OutsetTadpole,  DefaultTadpole,  DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 6
  [
    [DefaultTadpole, OutsetTadpole,  null,           DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 7
  [
    [null,           DefaultTadpole, null,           null],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole,  DefaultTadpole],
    [null,           DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 8
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null],
    [null,           DefaultTadpole, DefaultTadpole, null],
    [OutsetTadpole,  DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 9
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, OutsetTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null,           null,           DefaultTadpole, null],
  ],
  // 10
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null],
    [DefaultTadpole, null, OutsetTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 11
  [
    [OutsetTadpole, DefaultTadpole, DefaultTadpole, null],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 12
  [
    [DefaultTadpole, null, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, OutsetTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 13
  [
    [OutsetTadpole,  DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null,           DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, null          , null          , null          ],
  ],
  // 14
  [
    [null          , null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, null          , null          ],
  ],
  // 15
  [
    [null          , null          , null          , DefaultTadpole],
    [null          , null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, OutsetTadpole,  DefaultTadpole, DefaultTadpole],
  ],
  // 16
  [
    [null          , null          , DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole,  DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 17
  [
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [OutsetTadpole , null          , null          , DefaultTadpole],
  ],
  // 18
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [OutsetTadpole,  DefaultTadpole, DefaultTadpole, null          ],
    [null          , DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 19
  [
    [null          , DefaultTadpole, null          , null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 20
  [
    [null          , DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole , null          ],
  ],
  // 21
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, OutsetTadpole ],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 22
  [
    [DefaultTadpole, DefaultTadpole, null          , null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, OutsetTadpole , DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 23
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [null          , null          , DefaultTadpole, DefaultTadpole],
    [null          , OutsetTadpole , DefaultTadpole, DefaultTadpole],
  ],
  // 24
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , null          ],
  ],
  // 25
  [
    [null          , DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , OutsetTadpole ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
];
