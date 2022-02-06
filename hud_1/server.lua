ESX = nil

TriggerEvent('esx:getSharedObject', function(obj) ESX = obj end)


RegisterServerEvent('rc_newHud:getServerInfo')
AddEventHandler('rc_newHud:getServerInfo', function()
	local source = source
	local xPlayer = ESX.GetPlayerFromId(source)
	local info = {
		money = xPlayer.getMoney(),
		bankMoney = xPlayer.getAccount('bank').money,
        blackMoney = xPlayer.getAccount('black_money').money,
        id = source,
	}
		TriggerClientEvent('rc_newHud:setInfo', source, info)
end)




ESX.RegisterServerCallback('rc_newHud:getPlayerStats', function(source, cb)
	local b = source;
    local c = ESX.GetPlayerFromId(b)
	local xPlayer = ESX.GetPlayerFromId(source)
    local playerMoney = xPlayer.getMoney()

	


    cb(playerMoney)
    

    
		
end)