frappe.ui.form.on('Quotation', {
    validate: function(frm) {
        frm.trigger('calculate_totals');
    },

    calculate_totals: function(frm) {
        var totalPanels = 0;
        var totalTableTops = 0;
        var totalDoors = 0;
        var totalTableLegs = 0;
        var totalPromotions = 0;
        var totalPVC = 0;
        
    
        // Iterate through each item
        $.each(cur_frm.doc.items || [], function(i, item) {
            var item_group = item.item_group;
            var uom = item.uom;
            var qty = flt(item.qty);
    
            // Check if the item belongs to the "Products" item group
            if (item_group === "Panel") {
                totalPanels += qty;
            } else if (item_group === "Table Top") {
                totalTableTops += qty;
            } else if (item_group === "Door") {
                totalDoors += qty;
            } else if (item_group === "PVC") {
                totalPVC += qty;
            } else if (item_group === "Table Leg") {
                totalTableLegs += qty;
            } else if (item_group === "Promotion") {
                totalPromotions += qty;
            }
        });
    
        // Update custom_nos_total and custom_meter_total fields with the total quantity
        cur_frm.set_value('custom_total_panels', totalPanels);
        cur_frm.set_value('custom_total_table_tops', totalTableTops);
        cur_frm.set_value('custom_total_doors', totalDoors);
        cur_frm.set_value('custom_total_pvc', totalPVC);
        cur_frm.set_value('custom_total_legs', totalTableLegs);
        cur_frm.set_value('custom_total_promotion', totalPromotions);
    }
});
