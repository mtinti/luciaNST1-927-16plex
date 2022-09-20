let X1='logFC';
let Y1='FDR';
let X2='log_AveExpr';
let Y2='logFC';

let Y_LABEL_SCATTER1 = 'logFC';
let X_LABEL_SCATTER1 = '-Log10pval';

let Y_LABEL_SCATTER2 = 'AveExpr';
let X_LABEL_SCATTER2 = 'logFC';

let FLIP_Y1=false;
let FLIP_Y2=false;

let PLOT_WIDTH=550;
let PLOT_HEIGHT=400;

let PROJECT_TITLE='TREU927 NST1 PvM TMT16plex';
let TAB_TITLE='NST1 P/M'

let _margin_1 = 0.1;
let _margin_2 = 0.01;

let _border_1_x = 0;
let _border_1_y = 0;

let _border_2_x = 0;
let _border_2_y = 0;

let BOX_PLOT_COLS_1 = ['NST1p1', 'NST1p2', 'NST1p3', 'NST1p4']
let BOX_PLOT_COLS_2 = ['NST1m1', 'NST1m2', 'NST1m3', 'NST1m4']

//need to manually change conditions in
//xs table (index.html) and scatter plot app (app.js)
let CONDITION_1 = 'NST1p'
let CONDITION_2 = 'NST1m'


let COLOR_SELECTION_TABLE = 'orange';
let COLOR_SELECTION_CIRCLE = 'orange';

let Y_LABEL_BARPLOT = 'TMT Intensity';

let File_1 = 'indata_927.csv';
let File_2 = 'indata2_927.csv';


//these are th columns to show from file n1
//positions og Gene_acc','Gene_id' must not change
let COLUMNS_TO_TABULATE = ['Gene_acc','Gene_id','logFC','log_AveExpr','FDR','Desc'];