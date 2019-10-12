import { OutsetTadpole, DefaultTadpole, Tadpole } from './tadpoles/public_api';

export const levels: Array<Array<Array<typeof Tadpole>>> = [
  // 0
  [
    [OutsetTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 1
  [
    [DefaultTadpole, DefaultTadpole, null],
    [OutsetTadpole,  DefaultTadpole, DefaultTadpole],
  ],
  // 2
  [
    [null,            DefaultTadpole, OutsetTadpole],
    [null,            DefaultTadpole, DefaultTadpole],
    [DefaultTadpole,  DefaultTadpole, DefaultTadpole],
  ],
  // 3
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, null,           OutsetTadpole,  DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 4
  [
    [null,           null,           DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, OutsetTadpole,  DefaultTadpole,  DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 5
  [
    [DefaultTadpole, OutsetTadpole,  null,           DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 6
  [
    [null,           DefaultTadpole, null,           null],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole,  DefaultTadpole],
    [null,           DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 7
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null],
    [null,           DefaultTadpole, DefaultTadpole, null],
    [OutsetTadpole,  DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 8
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, OutsetTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null,           null,           DefaultTadpole, null],
  ],
  // 9
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null],
    [DefaultTadpole, null, OutsetTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 10
  [
    [OutsetTadpole, DefaultTadpole, DefaultTadpole, null],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 11
  [
    [DefaultTadpole, null, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, OutsetTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 12
  [
    [OutsetTadpole,  DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null,           DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, null          , null          , null          ],
  ],
  // 13
  [
    [null          , null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, null          , null          ],
  ],
  // 14
  [
    [null          , null          , null          , DefaultTadpole],
    [null          , null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, OutsetTadpole,  DefaultTadpole, DefaultTadpole],
  ],
  // 15
  [
    [null          , null          , DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole,  DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 16
  [
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [OutsetTadpole , null          , null          , DefaultTadpole],
  ],
  // 17
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [OutsetTadpole,  DefaultTadpole, DefaultTadpole, null          ],
    [null          , DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 18
  [
    [null          , DefaultTadpole, null          , null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 29
  [
    [null          , DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole , null          ],
  ],
  // 20
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, OutsetTadpole ],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 21
  [
    [DefaultTadpole, DefaultTadpole, null          , null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, OutsetTadpole , DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 22
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [null          , null          , DefaultTadpole, DefaultTadpole],
    [null          , OutsetTadpole , DefaultTadpole, DefaultTadpole],
  ],
  // 23
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , null          ],
  ],
  // 24
  [
    [null          , DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , OutsetTadpole ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 25
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, OutsetTadpole ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 26
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, null          , OutsetTadpole , DefaultTadpole],
    [DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 27
  [
    [DefaultTadpole, OutsetTadpole , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, null          , null          ],
  ],
  // 28
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, OutsetTadpole , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 29
  [
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 30
  [
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
  ],
  // 31
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , null          ],
  ],
  // 32
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 33
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, null          , null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole , DefaultTadpole],
  ],
  // 34
  [
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 35
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, OutsetTadpole ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 36
  [
    [DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 37
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, OutsetTadpole , DefaultTadpole, DefaultTadpole],
    [null          , null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 38
  [
    [DefaultTadpole, DefaultTadpole, OutsetTadpole , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 39
  [
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, null          , DefaultTadpole, OutsetTadpole ],
  ],
  // 40
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, OutsetTadpole ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
  ],
  // 41
  [
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 42
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, OutsetTadpole , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 43
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, OutsetTadpole ],
  ],
  // 44
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, OutsetTadpole ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 45
  [
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 46
  [
    [OutsetTadpole , null          , null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 47
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole, OutsetTadpole ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          , null          ],
  ],
  // 48
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, OutsetTadpole ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, null          , null          , null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 49
  [
    [DefaultTadpole, DefaultTadpole, null          , null          , DefaultTadpole],
    [OutsetTadpole , DefaultTadpole, null          , null          , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 50
  [
    [DefaultTadpole, DefaultTadpole, OutsetTadpole , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [null          , null          , null          , DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 51
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [OutsetTadpole , null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
  ],
  // 52
  [
    [null          , null          , DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, null          , OutsetTadpole ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 53
  [
    [null          , null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 54
  [
    [DefaultTadpole, DefaultTadpole, null          , null          , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, OutsetTadpole , null          ],
  ],
  // 55
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          , null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
  ],
  // 56
  [
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [null          , OutsetTadpole , DefaultTadpole, null          , DefaultTadpole],
  ],
  // 57
  [
    [null          , null          , null          , DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, OutsetTadpole , null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 58
  [
    [DefaultTadpole, DefaultTadpole, null          , null          , null          ],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , OutsetTadpole , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 59
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , null          , null          ],
  ],
  // 60
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , null          , null          ],
  ],
  // 61
  [
    [null          , null          , DefaultTadpole, DefaultTadpole, OutsetTadpole ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 62
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , OutsetTadpole , null          ],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 63
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [OutsetTadpole , DefaultTadpole, null          , null          , null          ],
  ],
  // 64
  [
    [null          , null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, OutsetTadpole , null          ],
  ],
  // 65
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          , null          ],
    [DefaultTadpole, DefaultTadpole, null          , null          , OutsetTadpole ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 66
  [
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , null          , null          ],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 67
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, null          , DefaultTadpole, OutsetTadpole , DefaultTadpole],
    [DefaultTadpole, null          , DefaultTadpole, null          , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, null          ],
  ],
  // 68
  [
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, null          ],
    [DefaultTadpole, OutsetTadpole , null          , DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
  // 69
  [
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [null          , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, OutsetTadpole ],
    [DefaultTadpole, null          , DefaultTadpole, DefaultTadpole, null          ],
  ],
  // 70
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole , DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , null          , null          , DefaultTadpole, null          ],
  ],
  // 71
  [
    [null          , null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [null          , null          , DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, OutsetTadpole , DefaultTadpole, DefaultTadpole],
  ],
  // 72
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, null          , OutsetTadpole , DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , null          , DefaultTadpole],
  ],
  // 73
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, DefaultTadpole],
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , null          , null          ],
  ],
  // 74
  [
    [DefaultTadpole, DefaultTadpole, null          , DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, null          ],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [null          , DefaultTadpole, DefaultTadpole, null          , OutsetTadpole ],
  ],
  // 75
  [
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [OutsetTadpole , DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, null          , DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, null          , null          , null          ],
  ],
  // 76
  [
    [OutsetTadpole,  DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
    [DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole, DefaultTadpole],
  ],
];
