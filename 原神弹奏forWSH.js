var shell = new ActiveXObject("WScript.Shell");
var application = new ActiveXObject("Shell.Application");

if(WScript.Arguments.length == 0) {
	application.ShellExecute("cscript.exe", "\"" + WScript.ScriptFullName + "\" UAC", null, "runas", 1);
	WScript.Quit(0);
}

var keyText = "(AQ) (Q) (DT) (T) (FY) (Y) (DT)  (SR) (R) (AE) (DE) (GW) (W) (AQ)  (DT) (GT) (SR) (GR) (AE) (DQE) (GJW)  (DT) (GT) (SR) (GR) (AE) (DQE) (GJW)  (AQ) (Q) (DT) (T) (FY) (Y) (DT)  (SR) (R) (AE) (DE) (GW) (W) (AQ)";
var i = 0;

do {
	WScript.Echo("进入原神弹琴界面，4秒后开始演奏！" + keyText);
	WScript.Sleep(4000);
} while (shell.AppActivate("原神") == false);


doWork(250);
function doWork(sleepTimeout) {
	for(; i < keyText.length && shell.AppActivate("原神") == true; i++) {

		var c = keyText.charAt(i).toUpperCase();
		switch(c)
		{
			case "(":
				i++;
				doWork(0);
				WScript.Sleep(sleepTimeout);
				break;
			case "[":
				i++;
				doWork(125);
				WScript.Sleep(sleepTimeout);
				break;
			case "{":
				i++;
				doWork(0);
				WScript.Sleep(sleepTimeout);
				break;
			case ")":
			case "]":
			case "}":
				return;
			case " ":
				WScript.Sleep(sleepTimeout);
				break;
			default:
				shell.SendKeys("{" + c + "}");
				WScript.Echo(new Date().toString() + ": " + c);
				WScript.Sleep(sleepTimeout);
				break;
		}
	}
}